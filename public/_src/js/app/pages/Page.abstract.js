// Third party dependencies
import debounce from 'lodash/debounce';
import anime from 'animejs';

// Zimplist Depedencies
import ContainerView from 'zimplist/display/ContainerView';
import WindowManager from 'zimplist/utils/WindowManager';
import ScrollingTracker from 'zimplist/utils/ScrollingTracker';
import Style from 'zimplist/utils/Style';

// Local app Dependencies


// Hidden consts

/**
 *
 */
class Page extends ContainerView {

    constructor(el, options) {
        super(el, options);

        this.listenTo(WindowManager, 'resize', this.resize);

        // Every page needs a scrolling tracker
        let parentNode = this.el.parentNode;

        this.scrollTracker = new ScrollingTracker( (this.id === 'home') ? window : parentNode );

        let contentPageCover = this.el.querySelector('.content-page-cover > img');
        if (contentPageCover) {
            this.contentPageCover = contentPageCover;
            this.addDomEvent( 'scroll', this._scrollHandler, this.scrollTracker.scrollContainer );
        }


    }

    /* ==========================

     Public Methods

     ========================== */

    get id() {
        return this.el.getAttribute('data-page-id');
    }

    _scrollHandler(event) {

        if (!this.queuedFrame) {

            this.queuedFrame = requestAnimationFrame( () => {
                let scrollTop = this.scrollTracker._getScrollContainerScrollTop();
                Style.set( this.contentPageCover, {transform: `translateY(${scrollTop * 0.5}px)`});
                this.queuedFrame = null;
            });

        }
    }

}

export default Page;
