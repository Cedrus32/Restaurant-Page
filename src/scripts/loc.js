import create from './elements';

const loc = (() => {
    // data
    const _address = '2735 College Avenue, Hillsboro, Oh';
    const _phone = '(562) 817-5090';

    // handler
    function render() {
        let _content = _generateSection();
        
        return _content;
    }

    // helpers
    function _generateSection() {
        let _section = create.section('#location');

        let _infoContainer = create.div('#info-container');
        _section.appendChild(_infoContainer);

        let _addressDiv = _generateAddress(_address);
        _infoContainer.appendChild(_addressDiv);

        let _hoursContainer = _generateHours();
        _infoContainer.appendChild(_hoursContainer);

        let _phoneDiv = _generatePhone(_phone);
        _infoContainer.appendChild(_phoneDiv);

        return _section;
    }
    function _generateAddress(address) {
        let _div = create.div('#address')
        _div.textContent = address;
        
        return _div;
    }
    function _generatePhone(phone) {
        let _div = create.div('#phone');
        _div.textContent = phone;

        return _div;
    }
    function _generateHours() {
        let _container = create.div('#hours');
        
        let _open = _generateOpen();
        _container.appendChild(_open);

        let _closed = create.div('#hours-closed');
        _closed.textContent = 'Closed on Mondays.';
        _container.appendChild(_closed);

        return _container;
    }
    function _generateOpen() {
        let _openContainer = create.div('#hours-open');
        let _div = '';
        for (let i = 0; i < 4; i++) {
            switch(i) {
                case 0:
                    _div = create.div('.twt', '.days');
                    _generateSpans(_div, 'Tuesday', 'Wednesday', 'Thursday');
                    _openContainer.appendChild(_div);
                    break;
                case 1:
                    _div = create.div('.twt', '.times');
                    _generateSpans(_div, '11am-9pm', '11am-9pm', '11am-10pm');
                    _openContainer.appendChild(_div);
                    break;
                case 2:
                    _div = create.div('.fss', '.days');
                    _generateSpans(_div, 'Friday', 'Saturday', 'Sunday');
                    _openContainer.appendChild(_div);
                    break;
                case 3:
                    _div = create.div('.fss', '.times');
                    _generateSpans(_div, '11am-11pm', '11am-11pm', '11am-10pm');
                    _openContainer.appendChild(_div);
            };
        };

        return _openContainer;
    }
    function _generateSpans(parentDiv, ...args) {
        let content = [...args];
        for (let i = 0; i < (content.length); i++) {
            let _span = create.span();
            _span.textContent = content[i]
            parentDiv.appendChild(_span);
        };
    }

    // make public
    return {
        render,
    }

})();

export default loc;