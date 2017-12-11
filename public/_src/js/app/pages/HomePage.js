// Third party dependencies
// import _ from "lodash";
import findLast from 'lodash/findLast';

import WindowManager from 'zimplist/utils/WindowManager';

// Local app Dependencies
import Page from 'app/pages/Page.abstract';

/**
 *
 */
class HomePage extends Page {

    constructor(el, options) {

        super(el, options);

        console.log('Page home');

        this.breakpointChanged();
    }

    /* ==========================

     Public Methods

     ========================== */

    resize() {
        super.resize();
    }

    /* ==========================

     Private Methods

     ========================== */



    /* ==========================

     Event Handlers

     ========================== */


}

export default HomePage;
