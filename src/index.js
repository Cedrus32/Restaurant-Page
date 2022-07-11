import './styles/reset.css';
import './styles/layout.css';
import './styles/shaping.css';
import './styles/typo.css';
import './styles/colors.css';

import body from './scripts/body';

(() => {
    body.render();
})();

// * class syntax to create cookie cutter objects -- properties: type, id, class, parent
// * module pattern to enact functionality