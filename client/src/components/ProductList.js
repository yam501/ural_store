import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import ProductItem from './ProductItem';
import { Context } from '..';

const ProductList = () => {
    const { product } = useContext(Context)

    return (
        <div className="slider mt-5">
            {product.products.map(product =>
                <ProductItem key={product.id} id={product.id} product={product} />
            )}
        </div>
    );
};

export default observer(ProductList);