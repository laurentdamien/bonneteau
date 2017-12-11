import anime from "animejs";

// Imports
import WindowManager from 'zimplist/utils/WindowManager';
import Config from 'zimplist/utils/Config';

import pageList from 'app/pages/pageList';

// Create main object
const BONNETEAU = {
    start() {

        // Init global config with page data
        let bootstrapConfig = window.BONNETEAU_CONFIG;

        if ( !bootstrapConfig ) {
            console.warn('No bootstrap config provided');
        } else {
            Config.initialize( bootstrapConfig );
        }

        // Setup WindowManager
        WindowManager.initialize({
            breakpoints : [
                {name: 'xxs',   value: 0   }, // needs to be 0 to avoid screwing up the detection
                {name: 'xs',    value: 550 },
                {name: 's',     value: 750 },
                {name: 'm',     value: 980 },
                {name: 'l',     value: 1200},
                {name: 'xl',    value: 1400},
                {name: 'xxl',   value: 1600}
            ]
        });

        // Initialize page in place and create new history entry
        // WARNING : make sure there are is only one '.page' loaded in the layout
        let page = this.initPage( document.querySelector('.page') );

        window.history.replaceState({pageId: page.id}, window.title, window.location.href);

        /*

        Setup AJAX navigation

        */
        // declare regex to detect internal links
        // TODO move to config?
        this.loadableRegex = new RegExp(`(^/|${window.location.origin}/.*)`);

        // Wait for load to trigger another re-render
        WindowManager.on('load', () => {
            WindowManager.trigger('resize');
        });

    },

    loadPage(url) {

        fetch(url, {
            credentials : 'same-origin'
        }).then( (response) => {
            // decide if we're returning JSON or string
            return ( response.headers.has('Content-Type') && response.headers.get('Content-Type').includes('application/json') ) ? response.json() : response.text();
        }).then( (responseData) => {
            let documentEl = stringToElement( responseData );

            let pageEl = documentEl.querySelector('.page');

            let page = this.initPage( pageEl );

            // Set initial state in history
            window.history.pushState({pageId: page.id}, window.title, url);

        });
    },

    initPage(pageEl) {

        // get unique string that id's the page
        let pageId = pageEl.getAttribute('data-page-id');

        // Get an instance for the class attributed for this page
        let pageObj;
        if ( pageList[pageId] ) {
            pageObj = new pageList[pageId]( pageEl );
        } else {
            pageObj = new pageList['default']( pageEl );
            console.error(`Can't find page class for id: ${pageId}`);
        }

        this.currentPage = pageObj;

        return pageObj;
    }

};

// Start App.
BONNETEAU.start();
