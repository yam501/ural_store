import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';

import ProductItem from '../ProductItem';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

import './slickSlider.css'

const Section = () => {

    const { product } = useContext(Context)

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
                <h className='showcase'>Мясной отдел</h>
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
            <div className="slider mt-5">
                {product.products.map(product =>
                    <ProductItem key={product.id} id={product.id} product={product} />
                )}
            </div>
        </Nav>
    );
};

export default observer(Section);