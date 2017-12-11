// Third party dependencies
import debounce from 'lodash/debounce';
import anime from 'animejs';

// Zimplist Depedencies
import ContainerView from 'zimplist/display/ContainerView';
import WindowManager from 'zimplist/utils/WindowManager';
import Style from 'zimplist/utils/Style';

/**
 *
 */
class Page extends ContainerView {

    constructor(el, options) {
        super(el, options);

        this.listenTo(WindowManager, 'resize', this.resize);

        // Every page needs a scrolling tracker
        let parentNode = this.el.parentNode;

    }

    /* ==========================

     Public Methods

     ========================== */

    get id() {
        return this.el.getAttribute('data-page-id');
    }

}

export default Page;
