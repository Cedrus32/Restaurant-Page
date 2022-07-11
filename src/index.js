import './styles/reset.css';
import './styles/layout.css';
import './styles/shaping.css';
import './styles/typo.css';
import './styles/colors.css';

import body from './scripts/body';

(() => {
    // initial render
    body.render();

    // subsewuent renders
    const links = document.querySelectorAll('li a');
    let main = '';

    links.forEach(link => link.addEventListener('click', (e) => {
        switchPage(e);
    }));

    function switchPage(e) {
        main = body.getMain();
        clearMain(main);
        body.generateContent(e.target.textContent);
    }
    function clearMain(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        };
    }

})();