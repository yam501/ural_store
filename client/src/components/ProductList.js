import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { Context } from '..';

const ProductList = () => {
    const { product } = useContext(Context)

    return (
        <Row className='d-flex'>
            {product.products.map(product =>
                <ProductItem className='itc-slider-item' key={product.id} id={product.id} product={product} /> 
            )}

        </Row>
    );
};

export default observer(ProductList);