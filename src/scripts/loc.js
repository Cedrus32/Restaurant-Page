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

        let _infoContainer = _generateContainer();
        _section.appendChild(_infoContainer);

        return _section;
    }
    function _generateContainer() {
        let _container = create.div('#info-container');

        let _addressDiv = _generateAddress(_address);
        _container.appendChild(_addressDiv);

        let _hoursContainer = _generateHours();
        _container.appendChild(_hoursContainer);

        let _phoneDiv = _generatePhone(_phone);
        _container.appendChild(_phoneDiv);

        return _container;
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
        let _span;
        for (let i = 0; i < 4; i++) {
            switch(i) {
                case 0:
                    _span = create.span('.twt', '.days');
                    _generateSpans(_span, 'Tuesday', 'Wednesday', 'Thursday');
                    _openContainer.appendChild(_span);
                    break;
                case 1:
                    _span = create.span('.twt', '.times');
                    _generateSpans(_span, '11am-9pm', '11am-9pm', '11am-10pm');
                    _openContainer.appendChild(_span);
                    break;
                case 2:
                    _span = create.span('.fss', '.days');
                    _generateSpans(_span, 'Friday', 'Saturday', 'Sunday');
                    _openContainer.appendChild(_span);
                    break;
                case 3:
                    _span = create.span('.fss', '.times');
                    _generateSpans(_span, '11am-11pm', '11am-11pm', '11am-10pm');
                    _openContainer.appendChild(_span);
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