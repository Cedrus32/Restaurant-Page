import create from './elements';

const home = (() => {
    // handler
    function render() {
        let _content = _generateSection();
        
        return _content;
    }

    // helpers
    function _generateSection() {
        let _section = create.section('#home');

        let _hero = _generateHero();
        _section.appendChild(_hero);

        return _section;
    }
    function _generateHero() {
        let _hero = create.div('#hero');

        let _logo = _generateLogo('');
        _hero.appendChild(_logo);

        let _title = _generateTitle("Tiki's Pizza");
        _hero.appendChild(_title);

        return _hero;
    }
    function _generateLogo(source) {
        let _img = create.img();
        _img.src = source;
        _img.alt = 'logo';

        return _img;
    }
    function _generateTitle(title) {
        let _header = create.h1('.title');
        _header.textContent = title;

        return _header;
    }

    // make public
    return {
        render,
    }

})();

export default home;