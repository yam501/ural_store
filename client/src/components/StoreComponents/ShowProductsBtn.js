import React, { useContext, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import ProductList from './ProductList';
import { Context } from '../..';

const ShowProductsBtn = ({type}) => {
    const { product } = useContext(Context)
    const [productShow, setProductShow] = useState(false)
    const [productsList, setProductsList] = useState([])
    const click = (type) => {
        setProductsList(product.products.filter(section => section.type === type))
        setProductShow(!productShow)
    }
    return (
        <Nav className='d-flex justify-content-center'>
        <Button className='btn-show-product meat' onClick={() => click(type)}>{productShow ? 'Скрыть товары' : 'Показать товары'}</Button>
        {productShow && <ProductList product={productsList}/>}
    </Nav>
    );
};

export default ShowProductsBtn;