import React, { useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import ProductItem from './ProductItem';
import { Context } from '..';
import AssortmentService from "../service/AssortmentService";

const ProductList = () => {
    const { product } = useContext(Context)

    useEffect(() => {
        AssortmentService.getAllByTypeAndAvailable('Салаты').then(data => product.setProduct(data))
    }, []);

    return (
        <div className="slider mt-5">
            {product.products.map(product =>
                <ProductItem key={product.type && "Мясо"} id={product.id} product={product} />
            )}
        </div>
    );
};

export default observer(ProductList);