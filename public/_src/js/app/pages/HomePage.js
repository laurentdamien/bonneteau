// Third party dependencies
// import _ from "lodash";
import findLast from 'lodash/findLast';

import SpriteAnimator from 'zimplist/display/animation/SpriteAnimator';
import ScrollingTracker from 'zimplist/utils/ScrollingTracker';
import WindowManager from 'zimplist/utils/WindowManager';
import getDocumentRect from 'zimplist/display/getDocumentRect';

// Local app Dependencies
import Page from 'app/pages/Page.abstract';
import ProgressPath from 'app/components/ProgressPath';
import CareerSlider from 'app/components/CareerSlider';
import AlphaVideo from 'app/components/AlphaVideo';

// Hidden consts
const MENU_COLLAPSE_HEIGHT = 111;

/**
 *
 */
class HomePage extends Page {

    constructor(el, options) {

        super(el, options);

        this.careerSlider = new CareerSlider(this.el.querySelector('.slider'));

        this.progressPath = new ProgressPath( this.el.querySelector('.progress-path'), {
            waypoints : Array.from(this.el.querySelectorAll('.brand-initials')),
            cutouts : Array.from(this.el.querySelectorAll('.progress-path-cutout'))
        });

        this.alphaVideos = Array.from( this.el.querySelectorAll('.alpha-video') ).map( alphaVideo => {
            return new AlphaVideo( alphaVideo );
        });

        // wait for dancer video to be loaded
        this.addDomEvent('loadedmetadata', () => {WindowManager.trigger('resize');}, this.el.querySelector('.dancer-anim video'));

        if (window.dataLayer) {
            this._initGTMTracking();
            this._currentTackedSection = null;
        }

        this._registerSubView( this.progressPath );
        this._registerSubView( this.careerSlider );

        this.breakpointChanged();

        this._initScrollingTracker();
    }

    /* ==========================

     Public Methods

     ========================== */

    breakpointChanged() {

        if ( this.minWidth('m') ) {

            if ( !this.productSprite ) {
                let spriteEl = this.el.querySelector('.sprite');
                this.productSprite = new SpriteAnimator(spriteEl, {fps : 0.75, numFrames: 9, url : spriteEl.getAttribute('data-src')});
                this._registerSubView( this.productSprite );
            }

        } else {
            if ( this.productSprite ) {
                this.productSprite.destroy();
                this._unregisterSubView( this.productSprite );
            }
        }

    }

    resize() {
        super.resize();

        // Save section offset for GTM tracking
        this._sectionOffsets = Array.from( this.el.querySelectorAll('.page-section') ).map( section => {
            return {
                el: section,
                offset: getDocumentRect(section).top - MENU_COLLAPSE_HEIGHT
            };
        });

    }

    /* ==========================

     Private Methods

     ========================== */

    /**
     * For performance and delayed animation reasons, we scroll track various elements
     *
     * @private
     */
    _initScrollingTracker() {
        // this.scrollTracker = new ScrollingTracker();

        // scrolling tracker for butterfly anims for performance reasons
        Array.from( this.el.querySelectorAll('.butterfly-overlay.alpha-video') ).forEach( (overlay) => {
            let tracker = this.scrollTracker.trackElement( overlay );
            tracker.on('state', (event) => {
                let video = overlay.querySelector('video');
                if (event.state === ScrollingTracker.STATE.OFF) {
                    video.pause();
                } else {
                    video.play();
                }
            });
        });

        // Scrolling tracker for product sprite animator
        if (this.productSprite) {
            let productSpriteTracker = this.scrollTracker.trackElement(this.productSprite.el);
            productSpriteTracker.on('state', (event) => {
                if (event.state === ScrollingTracker.STATE.OVERLAP || event.state === ScrollingTracker.STATE.ON) {
                    this.productSprite.play();
                } else {
                    this.productSprite.pause();
                }
            });

            if (productSpriteTracker.state === ScrollingTracker.STATE.ON || productSpriteTracker.state === ScrollingTracker.STATE.OVERLAP) {
                this.productSprite.play();
            }
        }


        // Track careers slider
        let careerSliderEl = this.el.querySelector('section.careers .slider');
        let careerSliderTracker = this.scrollTracker.trackElement( careerSliderEl);

        if (careerSliderTracker.state === ScrollingTracker.STATE.OFF) {
            let visibleSlides = Array.from( careerSliderEl.querySelectorAll('.slider-item.visible') );
            visibleSlides.forEach( slide => slide.classList.add('anim-in'));
            careerSliderTracker.on('state', function (event) {
                if (event.state !== ScrollingTracker.STATE.OFF) {
                    // remove event to only animate once
                    careerSliderTracker.off('state');
                    visibleSlides.forEach( (slide, i) => {
                        setTimeout( () => slide.classList.remove('anim-in'), 400 + (i * 200) );
                    });
                }
            });
        }


        // Scrolling tracker for dancer anim
        let dancerAnim = this.el.querySelector('.dancer-anim');
        let dancerAnimTracker = this.scrollTracker.trackElement( dancerAnim, 0.75 );

        // only play once, so don't listen for events if already onscreen
        if (dancerAnimTracker.state === ScrollingTracker.STATE.ON || dancerAnimTracker.state === ScrollingTracker.STATE.OVERLAP) {
            dancerAnim.querySelector('video').play();
        } else {
            dancerAnimTracker.on('state', (event) => {
                if (event.state === ScrollingTracker.STATE.OVERLAP || event.state === ScrollingTracker.STATE.ON) {
                    setTimeout( () => dancerAnim.querySelector('video').play(), 375);
                    dancerAnimTracker.off('state');
                } else {
                    dancerAnim.querySelector('video').pause();
                }
            });
        }


        // Track theme items to fade in
        Array.from( this.el.querySelectorAll('.theme-container li.theme-hidden') ).forEach( themeItem => {

            let tracker = this.scrollTracker.trackElement( themeItem );

            // only play once, so don't listen for events if already onscreen
            if (tracker.state === ScrollingTracker.STATE.ON || tracker.state === ScrollingTracker.STATE.OVERLAP) {
                themeItem.classList.remove('theme-hidden');
            } else {
                tracker.on('state', (event) => {
                    if (event.state === ScrollingTracker.STATE.OVERLAP || event.state === ScrollingTracker.STATE.ON) {
                        themeItem.classList.remove('theme-hidden');
                    }
                });
            }


        });

        // enable scrolling tracker for dancer-line.
        let dancerLineFull = this.el.querySelector('.candidate .dancer-line .full');
        let dancerLineScrollTracker = this.scrollTracker.trackElement( dancerLineFull, 0.25 );

        if (dancerLineScrollTracker.state === ScrollingTracker.STATE.ON) {
            dancerLineFull.classList.remove('stacked');
        } else {
            dancerLineScrollTracker.once('state:overlap', () => dancerLineFull.classList.remove('stacked') );
        }

    }

    _initGTMTracking() {

        // Our values CTA
        this.addDomEvent('click', (event) => {
            window.dataLayer.push({
                'event'                 : 'virtualSection',
                'pageGroupingMaison'    : 'Human Resources',
                'section'               : 'brand-values',
                'subSection'            : 'brand-values',
                'uri'                   : event.delegateTarget.getAttribute('href'),
                'pageLanguage'          : document.documentElement.lang
            });

        }, 'section.brand-values .button');

        this.addDomEvent('click', (event) => {

            let link = event.delegateTarget.querySelector('.career-title a');

            window.dataLayer.push({
                'event'                 : 'virtualSection',
                'pageGroupingMaison'    : 'Human Resources',
                'section'               : 'human-resources',
                'subSection'            : link.getAttribute('data-tracking-id'),
                'uri'                   : link.getAttribute('href'),
                'pageLanguage'          : document.documentElement.lang

            });

        }, '.careers .slider-item');

        this.addDomEvent('click', (event) => {

            let link = event.delegateTarget;

            window.dataLayer.push({
                'event'                 : 'virtualSection',
                'pageGroupingMaison'    : 'Human Resources',
                'section'               : 'Human Resources',
                'subSection'            : link.getAttribute('data-tracking-id'),
                'uri'                   : link.getAttribute('href'),
                'pageLanguage'          : document.documentElement.lang
            });

        }, '.page-section.human-resources .button');

        this.addDomEvent('click', (event) => {
            window.dataLayer.push({
                'event'                 : 'virtualSection',
                'pageGroupingMaison'    : 'Human Resources',
                'section'               : 'candidate',
                'subSection'            : 'candidate',
                'uri'                   : event.delegateTarget.getAttribute('href'),
                'pageLanguage'          : document.documentElement.lang
            });
        }, 'section.candidate .button');


        this.listenTo( WindowManager, 'scroll', (event) => {

            let section = findLast( this._sectionOffsets, sectionOffset => WindowManager.scrollPosition.top >= sectionOffset.offset );

            if (section && section !== this._currentTackedSection) {
                let sectionAnchor = section.el.querySelector('a[name]');
                if (sectionAnchor) {

                    window.dataLayer.push({
                        'event'                 : 'virtualSection',
                        'pageGroupingMaison'    : 'Human Resources',
                        'section'               : sectionAnchor.getAttribute('name'),
                        'uri'                   : window.location.pathname,
                        'pageLanguage'          : document.documentElement.lang
                    });

                    this._currentTackedSection = section;
                }

            }

        });

    }

    /* ==========================

     Event Handlers

     ========================== */



}

export default HomePage;
