import Page from 'app/pages/Page.abstract';

import HomePage from 'app/pages/HomePage';

// Map of page ID's and view classes
// The keys must match the page IDs sent by the server
const pageList = {
    'default'           : Page,
    'home'              : HomePage
};

export default pageList;
