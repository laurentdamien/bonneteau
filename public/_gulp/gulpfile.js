// Native modules
const fs                  = require('fs');
const util                = require('util');

// Stream utils
const through2            = require('through2');
const merge               = require('merge-stream');

// Gulp + Vinyl deps
const gulp                = require('gulp');
const source              = require('vinyl-source-stream');
const gulpUtil            = require('gulp-util');
const notify              = require('gulp-notify');

// Script deps
const browserify          = require('browserify');
const babelify            = require('babelify');
const watchify            = require('watchify');
const uglify              = require('gulp-uglify');
const modernizr           = require('gulp-modernizr-build');

const rollup              = require('rollup');
const rollupIncludepaths  = require('rollup-plugin-includepaths');
const rollupNodeResolve   = require('rollup-plugin-node-resolve');
const rollupCommonjs      = require('rollup-plugin-commonjs');
const uglifyES            = require('uglify-es');

// Styles
const sass                = require('gulp-sass');
const autoprefixer        = require('autoprefixer');
const postcss             = require('gulp-postcss');
const csswring            = require('csswring');
const stripCssComments    = require('gulp-strip-css-comments');

// General purpose
const rename              = require('gulp-rename');
const concat              = require('gulp-concat');

// Various build tools
const sourcemaps          = require('gulp-sourcemaps');
const browserSync         = require('browser-sync').create();
const sequence            = require('gulp-sequence').use( gulp );

const del                 = require('del');


/*

    CONFIG VARS

*/

const dir = {
    src  : '../_src/',
    dist : '../'
};



/*

    SCRIPTS

*/

/**
 * Build custom modernizr
 **/
gulp.task('modernizr', () => {

    return gulp.src([
        `${dir.src}js/**/*.js`,
        `!${dir.src}js/modernizr.js`,
        `${dir.src}scss/**/*.scss`
    ])
        .pipe( modernizr('modernizr.min.js', {
            cssPrefix : 'feat-',
            addFeatures : [
                'es6/promises',
                'es6/arrow',
                'es6/string',
                'es6/object',
                'es6/contains',
                'es6/number',
                'es6/object'
            ]
        }))
        .pipe( uglify() )
        .pipe( gulp.dest(`${dir.dist}js`) );

});

gulp.task('polyfills', () => {

    return gulp.src( dir.src+'js/polyfills/*.js')
        .pipe( concat('polyfills.js') )
        .pipe( uglify() )
        .pipe( gulp.dest( `${dir.dist}js` ) )

});

/*

Scripts : ES5 compilation

 */

function bundleScripts(watch) {

    // Create base bundler
    let bundler = browserify(`${dir.src}js/app/main`, {
        extensions: 'js',
        paths : [
            dir.src+'js/', // easier import resolution when pointing right at the JS folder
            __dirname+'/node_modules/' // add node_modules back to the paths
        ],
        debug: true, // Use pretty paths
        detectGlobals: false, // might be problematic for some libs, but speeds up the build.
        cache: true,
        packageCache : true
    });

    // if we want to watch the file, wrap the bundler in watchify here
    if (watch) {
        bundler = watchify(bundler, {poll: true}); // need poll for OS X sometimes (fsevents ignoring files)
        bundler.on('update', rebundle);
    }

    // Set up Babel transpilation
    bundler.transform(babelify.configure({
        presets : [ `${__dirname}/node_modules/babel-preset-es2015`], // When your ES6 sources aren't under the directory containing Gulp, you need to specify an absolute path to the preset module
        compact : false,
        only : /\/(app|zimplist)\/.*/
    }));

    bundler.transform('swapify', {global: true});

    // function that returns a bundler stream (IE. an active bundling operation)
    function rebundle() {

        return bundler
            .bundle()
            .on('error', notify.onError("Browserify Error : <%= error.message %>") )
            .pipe( source('scripts.js') )
            .pipe( gulp.dest(dir.dist+'js') )
            .pipe( browserSync.stream() );
    }

    // return a first bundling stream (note we are not returning the rebundle function, but the string of streams that rebundle itself returns
    return rebundle();

}

gulp.task('scripts', () => {
    return bundleScripts(false);
});

gulp.task('min-scripts', ['scripts'], () => {

    return gulp.src( `${dir.dist}js/scripts.js`)
        .pipe( uglify() )
        .pipe( rename('scripts.min.js') )
        .pipe( gulp.dest(dir.dist+'js') );

});

/*

Scripts : ES6 compilation

 */

let rollupCache;

function bundleScriptsEs6(minify = false) {

    return rollup.rollup({
        entry : `${dir.src}js/app/main.js`,
        cache : rollupCache,
        plugins: [
            rollupIncludepaths({ // use this to have absolute paths from js dir.
                paths : [
                    `${dir.src}js/`
                ]
            }),
            rollupNodeResolve({
                module: false, // we want the same file as the browserify build, just in case
                customResolveOptions: {
                    moduleDirectory:  __dirname+'/node_modules/'
                }
            }),
            rollupCommonjs(), // node_modules will probably need this
        ]
    }).then( (bundle) => {

        // console.log('rollup ready to roll');

        // Generate bundle
        const {code, map} = bundle.generate({
            format : 'iife',
            sourceMap: true,
            exports : 'none',
        });

        // append sourcemap comment to the code and write the file
        let output = code + "\n //# sourceMappingURL=" + map.toUrl();
        fs.writeFileSync(`${dir.dist}js/scripts.es6.js`, output);

        // Minify output for prod (without sourcemaps this time)
        if (minify) {
            // Output minified bundle
            let minified = uglifyES.minify(code);

            if (minified.error) {
                throw new Error( minified.error.message );
            } else {
                fs.writeFileSync(`${dir.dist}js/scripts.es6.min.js`, minified.code);
            }

        }

        browserSync.reload();

    });
}

gulp.task('scripts-es6', () => {
    return bundleScriptsEs6(false);
});

gulp.task('min-scripts-es6', () => {
    return bundleScriptsEs6(true);
});


/*

    STYLES

*/

gulp.task('styles', () => {

    let processors = [
        autoprefixer({
            browsers : ['last 2 versions','> 2%','ie 11']
        })
    ];

    return gulp.src( `${dir.src}scss/*.scss`)
        .pipe( sourcemaps.init() )
        .pipe( sass({ style : 'expanded'}).on('error', sass.logError) ) // pretty console formatted error
        .on('error', notify.onError({ title : 'sass error', message : '<%= error.message %>'})) // OS level notification
        .pipe( postcss(processors) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest(`${dir.dist}css/`) )
        .pipe( browserSync.stream() )
        .pipe( postcss( [csswring()] ) )
        .pipe( stripCssComments() ) // csswring doesn't strip out inline sourcemaps
        .pipe( rename( function (path) {
            path.basename += '.min';
        } ) )
        .pipe( gulp.dest(`${dir.dist}css/`) );


});

/*

    OTHER

 */

gulp.task('copy-static', () => {

    gulp.src([
        `${dir.src}js/modernizr.js`,
        `${dir.src}images/*.*`
    ], {base: dir.src})
    .pipe( gulp.dest(dir.dist) );

});

/*

 Clean dist dir

 */
gulp.task('clean', () => {
    return del([
        `${dir.dist}js/**/*.*`,
        `${dir.dist}css/**/*.*`,
        `${dir.dist}img/**/*.*`
    ], {force: true});
});


/*

    Watch, Browser-sync & Aggregate tasks

*/

gulp.task('browser-sync', () => {

    browserSync.init({
        proxy : 'http://bonneteau.my',
        port : 6600,
        browser: "google chrome",
        open: true,
        reloadOnRestart : true,
        online : true
    });

});


gulp.task('watch', ['browser-sync'], () => {

    // ES6 Scripts
    gulp.watch(`${dir.src}js/**/*.js`, ['scripts-es6']);

    // Styles
    gulp.watch(`${dir.src}scss/**/*.scss`, ['styles']);

});

gulp.task('default', sequence(
    'clean',
    'copy-static',
    [
        'polyfills',
        'modernizr',
        'scripts',
        'scripts-es6',
        'min-scripts',
        'min-scripts-es6'

    ],
    [
        'styles'
    ]
));
