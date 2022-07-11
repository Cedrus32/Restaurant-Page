import create from './elements';
import nav from './nav';
import home from './home';
//// import menu from './scripts/menu';
//// import location from './scripts/location'
//// import switchPage from './scripts/switchPage';

const body = (() => {
    // handler
    function render() {
        nav.render();
        let _mainContainer = _generateMain();
        document.body.appendChild(_mainContainer);
        let _pageContent = _generateContent();
        _mainContainer.appendChild(_pageContent);
    }

    // helpers
    function _generateMain() {
        let _main = create.main();
        return _main;
    }
    function _generateContent() {
        let _content = home.render();
        return _content;
    }

    // make public
    return {
        render,
    }

})();

export default body;