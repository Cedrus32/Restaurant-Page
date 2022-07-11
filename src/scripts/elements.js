const create = (() => {
    // data
    let _atts = [];
    let el = '';

    // public
    function nav(...args) {
        _atts = [...args];
        console.log(_atts);
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
    // const section = (() => {

    // })
    // const div = (() => {

    // })
    // const span = (() => {

    // })
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
    // const h1 = (() => {

    // })
    // const h2 = (() => {

    // })
    // const h3 = (() => {

    // })

    // private
    function _setAtts(element, attributes) {
        console.log('enter _setAtts');
        for (let i in attributes) {
            console.log(attributes[i]);
            console.log(attributes[i][0]);
            console.log(attributes[i].substring(1, attributes[i].length));
            if (attributes[i][0] === '.') {
                element.classList.append(attributes[i].substring(1, attributes[i].length));
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
        img,
        a,
    }

})();

export default create;