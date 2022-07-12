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
    // ...pizza portion
    function _generatePizzas() {
        let _container = create.div('#pizzas');

        let _header = create.h2();
        _header.textContent = 'Pizzas';
        _container.appendChild(_header);

        let _prices = _generatePizzaPrices();
        _container.appendChild(_prices);

        let _toppings = _generateToppings();
        _container.appendChild(_toppings);

        return _container;
    }
    // ...price divs
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
    // ...pizza - other divs
    function _generateToppings() {
        let _container = create.div('#pizza-toppings', '.category');

        let _header = create.h3();
        _header.textContent = 'Toppings';
        _container.appendChild(_header);

        let _toppingsList = create.div('.category-list');
        for (let i = 0; i < 9; i++) {
            let _span = create.span();
            switch(i) {
                case 0:
                    _span.textContent = 'cheese';
                    break;
                case 1:
                    _span.textContent = 'pepperoni';
                    break;
                case 2:
                    _span.textContent = 'ham';
                    break;
                case 3:
                    _span.textContent = 'sausage';
                    break;
                case 4:
                    _span.textContent = 'pineapple';
                    break;
                case 5:
                    _span.textContent = 'green pepper';
                    break;
                case 6:
                    _span.textContent = 'black olive';
                    break;
                case 7:
                    _span.textContent = 'red onion';
                    break;
                case 8:
                    _span.textContent = 'fresh tomato';
                    break;
            };
            _toppingsList.appendChild(_span);
        }
        _container.appendChild(_toppingsList);

        return _container;
    }


    // make public
    return {
        render,
    }

})();

export default menu;