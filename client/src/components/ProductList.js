import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import ProductItem from './ProductItem';
import { Context } from '..';

const ProductList = () => {
    const { product } = useContext(Context)

    return (
        <div className='owl-carousel-product'>
            {product.products.map(product =>
                  <ProductItem key={product.id} product={product}/>
                  )}

        </div>
    );
};

export default observer(ProductList);