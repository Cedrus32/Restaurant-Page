import create from './elements';

const nav = (() => {
    // data
    let _target = '';

    // handler
    function render() {
        let _navbar = _generateNav();
        document.body.appendChild(_navbar);
    }

    // helpers
    function _generateNav() {
        let _navbar = create.nav('#nav');

        let _links = _generateUl();
        _navbar.appendChild(_links);

        return _navbar;
    }
    function _generateUl() {
        let _ul = create.ul('#nav-links');

        for (let i = 0; i < 4; i++) {
            let _li = create.li();
            if (i !== 1) {
                let _link = _generateLink(i);
                _li.appendChild(_link)
            } else {
                _li.classList = 'nav-spacer';
            }
            _ul.appendChild(_li);
        }

        return _ul;
    }
    function _generateLink(i) {
       let _a = create.a();

        switch (i) {
            case 0:
                _target = 'home';
                _populateLink(_a, _target);
                break;
            case 1:
                _a.class = 'nav-spacer';
                break;
            case 2:
                _target = 'menu';
                _populateLink(_a, _target);
                break;
            case 3:
                _target = 'location';
                _populateLink(_a, _target);
        }

        return _a;
    }
    function _populateLink(a, t) {
        a.id = `${t}-link`;
        if (t === 'home') {
            a.src = 'index.html';
        } else {
            a.src = `${t}.html`;
        }
        a.textContent = `${t}`;
    }

    // make public
    return {
        render,
    }

})();

export default nav;