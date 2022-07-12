import create from './elements';
import nav from './nav';
import home from './home';
import menu from './menu';
import loc from './loc';

const body = (() => {
    // data
    let currPage = 'home';
    let mainContainer = '';

    // handler
    function render() {
        nav.render();
        mainContainer = _generateMain();
        document.body.appendChild(mainContainer);
        generateContent(currPage);
    }

    // helpers
    function _generateMain() {
        let _main = create.main();
        return _main;
    }
    function generateContent(page) {
        let _content = '';
        switch(page) {
            case 'home':
                _content = home.render();
                break;
            case 'menu':
                _content = menu.render();
                break;
            case ('location'):
                _content = loc.render();
        }
        mainContainer.appendChild(_content);
    }
    function getMain() {
        return mainContainer;
    }

    // make public
    return {
        render,
        generateContent,
        getMain,
    }

})();

export default body;