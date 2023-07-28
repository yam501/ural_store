import React, { useContext, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';

import ProductItem from './ProductItem';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

import './slickSlider.css'
import ProductList from '../ProductList';

const SectionMeat = () => {

    const { product } = useContext(Context)
    const [productShow, setProductShow] = useState(false)
    return (
        <Nav className='d-flex justify-content-center meat-section-content'>
            <Nav className='
            d-flex
            mt-5
            mb-5
            meat-header
            w-100
            border-3
            border-top
            border-bottom
            justify-content-center
            align-items-center
            fs-2
            showcase'>
                <h className='showcase'>Витрина мясного отдела</h>
            </Nav>
            <Nav className='d-flex
            mt-2
            mb-2
            camera
            w-100  
            justify-content-center
            align-items-center
            bg-black
            text-white'
                style={{ height: '500px' }}
                id='meat_section'>
                Камера
            </Nav>
            <Button className='btn-show-product'  onClick={() => setProductShow(!productShow)}>Показать товары</Button>
            {productShow && <ProductList/>}
        </Nav>
    );
};

export default observer(SectionMeat);