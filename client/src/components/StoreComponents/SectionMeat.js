import React, { useContext, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';

import ProductItem from './ProductItem';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

import ProductList from './ProductList';

const SectionMeat = () => {

    const { product } = useContext(Context)
    const [productShow, setProductShow] = useState(false)
    return (
        <Nav className='meat-section-content'>
            <Nav className='
            d-flex
            mt-5
            mb-0
            section-header
            w-100
            border-3
            border-top
            border-bottom
            justify-content-center
            align-items-center
            fs-2
            showcase'>
                <h id='meat_section' className='showcase'>Витрина мясного отдела</h>
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
                >
                Камера
            </Nav>
            <Nav className='d-flex justify-content-center'>
                <Button className='btn-show-product ' onClick={() => setProductShow(!productShow)}>{productShow ? 'Скрыть товары' : 'Показать товары'}</Button>
                {productShow && <ProductList />}
            </Nav>
        </Nav>
    );
};

export default observer(SectionMeat);