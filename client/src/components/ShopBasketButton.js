import React from 'react';
import Button from 'react-bootstrap/Button';
import { BASKET_ROUTE } from '../utils/consts';
const ShopBasketButton = () => {
    return (
        <Button 
        className='ms-3 d-flex justify-content-center align-items-center rounded-circle btnBasket'
        >
            <div className='btnBasketIconBox' >
                <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.12808 1.00012H29.1834L26.9877 14.0001H8.32383L6.12808 1.00012Z" className="btnBasketFill" stroke="#FF709A" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5542 21C12.6588 21 13.5542 20.1046 13.5542 19C13.5542 17.8954 12.6588 17 11.5542 17C10.4496 17 9.5542 17.8954 9.5542 19C9.5542 20.1046 10.4496 21 11.5542 21Z" className="btnBasketFill" stroke="#FF709A" stroke-opacity="0.7" stroke-width="2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5542 21C24.6588 21 25.5542 20.1046 25.5542 19C25.5542 17.8954 24.6588 17 23.5542 17C22.4496 17 21.5542 17.8954 21.5542 19C21.5542 20.1046 22.4496 21 23.5542 21Z" className="btnBasketFill" stroke="#FF709A" stroke-opacity="0.7" stroke-width="2"/>
                <path d="M5.5542 1L1.5542 1" className="btnBasketFill" stroke="#FF709A" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>

        </Button>
    );
};

export default ShopBasketButton;