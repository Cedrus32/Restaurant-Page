import create from './elements';
import nav from './nav';
//// import home from './scripts/home';
//// import menu from './scripts/menu';
//// import location from './scripts/location'
//// import switchPage from './scripts/switchPage';

const body = (() => {
    // handler
    function render() {
        nav.render();
        let _mainContent = _generateMain();
        document.body.appendChild(_mainContent);
    }

    // helpers
    function _generateMain() {
        let _main = create.main();
        // render page content
        _main.appendChild
        return _main;
    }

    // make public
    return {
        render,
    }

})();

export default body;