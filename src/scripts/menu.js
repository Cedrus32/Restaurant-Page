import create from './elements';

const menu = (() => {
    // data
    const _prices = [['Classic', 'classic-prices', '$10', '$12', '$16'],
                     ['Specialty', 'speciality-prices', '$12', '$14', '$18'],
                     ['Supreme', 'supreme-prices', '$14', '$16', '$20'],
                     ['Xtra Toppings', 'topping-prices', '$1', '$2', '$3'],
                    ];
    const _toppings = ['cheese',
                       'pepperoni',
                       'ham',
                       'sausage',
                       'pineapple',
                       'green pepper',
                       'black olive',
                       'red onion',
                       'fresh tomato',
                      ];
    const _pizzas = [['Classic Cheese', 'red sauce, cheese'],
                     ['Classic Pepperoni', 'red sauce, cheese, pepperoni'],
                     ["Tiki's Special", 'red sauce, cheese, ham, pineapple'],
                     ['The Tiki Supreme', 'red sauce, cheese, sausage, green peppers, black olives, red onions'],
                    ];
    const _sides = [('Garden Salad - $', 'lettuce, fresh tomato, green pepper, red onions, choice of salad dressing'),
                    ('Chicken Wings - $', 'Crispy chicken wings, choice of dipping sauce'),
                    ('Tiki Fries - $', 'Golden fries with hous seasoning, choice of dipping sauce'),
                   ];
    const _drinks = [('"Shake-Shake-Shakes" - $', 'vanilla', 'chocolate', 'strawberry'),
                     ('soda - $', 'Coke', 'Diet Coke', 'Sprite', 'Pibb Xtra'),
                     ('beer - $', 'Bud', 'Miller', 'Modelo', 'Stella Artois'),
                    ];
    const _extras = [('dipping sauce - ¢50', 'bacon katchup', 'sriracha mayo', 'honey mustard'),
                     ('salad dressings - ¢50', 'ranch', 'french', 'balsalmic vinaigrette'),
                    ];

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

        let _sidesDiv = _generateSides();
        _container.appendChild(_sidesDiv);

        // ! create arrays with data,
        // ! push arrays to 'createMenuItems',
        // ! index into arrays to create items

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

        let _pizzaList = _generatePizzaList();
        _container.appendChild(_pizzaList);

        return _container;
    }
    // ...price divs
    function _generatePizzaPrices() {
        let _container = create.div('#pizza-prices');

        let _sizes = _generateSizeCol();
        _container.appendChild(_sizes);

        let _priceContainer = create.div('#price-categories');
        _container.appendChild(_priceContainer);

        for (let i = 0; i < (_prices.length); i++) {
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
        let _listContainer = create.div('.category', `#${_prices[i][1]}`);
        let _header = create.h3();
        _header.textContent = _prices[i][0];
        _listContainer.appendChild(_header);
        _generatePriceSpans(_listContainer, i);

        return _listContainer;
    }
    function _generatePriceSpans(element, i) {
        for (let j = 2; j < (_prices[i].length); j++) {
            let _span = create.span();
            _span.textContent = _prices[i][j];
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
        for (let i = 0; i < (_toppings.length); i++) {
            let _span = create.span();
            _span.textContent = _toppings[i];
            _toppingsList.appendChild(_span);
        }
        _container.appendChild(_toppingsList);

        return _container;
    }
    function _generatePizzaList() {
        let _container = create.div('#pizza-list');

        for (let i = 0; i < 4; i++) {
            let _menuItem = create.div('.menu-item-ydesc');
            let _header = create.h3();
            let _span = create.span();

            _header.textContent = _pizzas[i][0];
            _span.textContent = _pizzas[i][1];

            _menuItem.appendChild(_header);
            _menuItem.appendChild(_span);
            _container.appendChild(_menuItem);
        };

        return _container;
    }
    // ...sides portion
    function _generateSides() {
        let _container = create.div('#sides');

        let _header = create.h2();
        _header.textContent = 'Sides';
        _container.appendChild(_header);

        let _sidesList = _generateSidesList();
        _container.appendChild(_sidesList);

        return _container;
    }
    function _generateSidesList() {
        let _container = create.div('#sides-list');

        for (let i = 0; i < 3; i++) {
            let _menuItem = create.div('.menu-item-ydesc');
            let _header = create.h3();
            let _span = create.span();

            switch(i) {
                case 0:
                    _header.textContent = 'Garden Salad';
                    _span.textContent = 'lettuce, fresh tomato, green pepper, red onions, cheese, choice of salad dressing';
                    break;
                case 1:
                    _header.textContent = 'Chicken Wings';
                    _span.textContent = 'Crispy chicken wings, choice of dipping sauce';
                    break;
                case 2:
                    _header.textContent = "Tiki Fries";
                    _span.textContent = 'Golden fries with house seasoning, choice of dipping sauce';
                    break;
            };
            _menuItem.appendChild(_header);
            _menuItem.appendChild(_span);
            _container.appendChild(_menuItem);
        };

        return _container;
    }


    // make public
    return {
        render,
    }

})();

export default menu;