const create = (() => {
    // data
    let _atts = [];
    let el = '';

    // public
    function nav(...args) {
        _atts = [...args];
        el = document.createElement('nav');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function ul(...args) {
        _atts = [...args];
        el = document.createElement('ul');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function li(...args) {
        _atts = [...args];
        el = document.createElement('li');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function main(...args) {
        _atts = [...args];
        el = document.createElement('main');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function section(...args) {
        _atts = [...args];
        el = document.createElement('section');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function div(...args) {
        _atts = [...args];
        el = document.createElement('div');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function span(...args) {
        _atts = [...args];
        el = document.createElement('span');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function img(...args) {
        _atts = [...args];
        el = document.createElement('img');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function a(...args) {
        _atts = [...args];
        el = document.createElement('a');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function h1(...args) {
        _atts = [...args];
        el = document.createElement('h1');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function h2(...args) {
        _atts = [...args];
        el = document.createElement('h2');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }
    function h3(...args) {
        _atts = [...args];
        el = document.createElement('h3');
        if (_atts.length > 0) {
            _setAtts(el, _atts);
        };
        return el;
    }

    // private
    function _setAtts(element, attributes) {
        for (let i in attributes) {
            if (attributes[i][0] === '.') {
                element.classList.add(attributes[i].substring(1, attributes[i].length));
            } else if (attributes[i][0] === '#') {
                element.id = attributes[i].substring(1, attributes[i].length);
            };
        };
    }

    return {
        nav,
        ul,
        li,
        main,
        section,
        div,
        span,
        img,
        a,
        h1,
        h2,
        h3
    }

})();

export default create;