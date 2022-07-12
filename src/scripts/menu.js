import create from './elements';

const menu = (() => {
    // data

    // handler
    function render() {
        let _content = _generateSection();

        return _content;
    }

    // helpers
    function _generateSection() {
        let _section = create.section('#menu');

        let _menuContainer = _generateContainer();
        _section.appendChild(_menuContainer);

        return _section;
    }
    function _generateContainer() {
        let _container = create.div('#menu-container');

        let _pizzasDiv = _generatePizzas();
        _container.appendChild(_pizzasDiv);

        // let _sidesDiv = _generateSides();
        // _container.appendChild(_sidesDiv);

        // let _drinksDiv = _generateDrinks();
        // _container.appendChild(_drinksDiv);

        // let _extrasDiv = _generateExtras();
        // _container.appendChild(_extrasDiv);

        return _container;
    }
    function _generatePizzas() {
        let _container = create.div('#pizzas');

        let _header = create.h2();
        _header.textContent = 'Pizzas';
        _container.appendChild(_header);

        let _prices = _generatePizzaPrices();
        _container.appendChild(_prices);



        return _container;
    }
    function _generatePizzaPrices() {
        let _container = create.div('#pizza-prices');

        let _sizes = _generateSizeCol();
        _container.appendChild(_sizes);

        let _priceContainer = create.div('#price-categories');
        _container.appendChild(_priceContainer);

        for (let i = 0; i < 4; i++) {
            let _priceCategory = _generatePriceCat(i);
            _priceContainer.appendChild(_priceCategory);
        }

        return _container;
    }
    function _generateSizeCol() {
        let _column = create.div('#sizes');
        for (let i = 0; i < 3; i++) {
            let _span = create.span();
            switch(i) {
                case 0:
                    _span.textContent = '10"';
                    break;
                case 1:
                    _span.textContent = '12"';
                    break;
                case 2:
                    _span.textContent = '16"';
            }
            _column.appendChild(_span);
        };

        return _column;
    }
    function _generatePriceCat(i) {
        let _listContainer = create.div('.category');
        let _header = create.h3();
        switch(i) {
            case 0:
                _listContainer.id = 'classic-prices';
                _header.textContent = 'Classic';
                break;
            case 1:
                _listContainer.id = 'specialty-prices';
                _header.textContent = 'Specialty';
                break;
            case 2:
                _listContainer.id = 'supreme-prices';
                _header.textContent = 'Supreme';
                break;
            case 3:
                _listContainer.id = 'topping-prices';
                _header.textContent = 'Xtra Toppings';
        };
        _listContainer.appendChild(_header);
        _generatePriceSpans(_listContainer, i);

        return _listContainer;
    }
    function _generatePriceSpans(element, i) {
        for (let j = 0; j < 3; j++) {
            let _span = create.span();
            switch(i) {
                case 0:
                    switch(j) {
                        case 0:
                            _span.textContent = '$10';
                            break;
                        case 1:
                            _span.textContent = '$12';
                            break;
                        case 2:
                            _span.textContent = '$16';
                    };
                case 1:
                    switch(j) {
                        case 0:
                            _span.textContent = '$12';
                            break;
                        case 1:
                            _span.textContent = '$14';
                            break;
                        case 2:
                            _span.textContent = '$18';
                    };
                case 2:
                    switch(j) {
                        case 0:
                            _span.textContent = '$14';
                            break;
                        case 1:
                            _span.textContent = '$16';
                            break;
                        case 2:
                            _span.textContent = '$20';
                    };
                case 3:
                    switch(j) {
                        case 0:
                            _span.textContent = '$1';
                            break;
                        case 1:
                            _span.textContent = '$2';
                            break;
                        case 2:
                            _span.textContent = '$3';
                    };
            };
            element.appendChild(_span);
        };
    }

    // make public
    return {
        render,
    }

})();

export default menu;