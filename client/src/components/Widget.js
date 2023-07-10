import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/esm/Button';
const Widget = () => {

    return (
        <Nav className='widget_content'>
            <Nav className='widget_name'>
                Курица 
                кг
            </Nav>
            <Nav className="quantity_inner">
                <Button className="bt_minus">
                    <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </Button>
                <span className="quantity"> 1 </span>
                <Button className="bt_plus">
                    <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </Button>
            </Nav>
        </Nav>
    );
};

export default Widget;