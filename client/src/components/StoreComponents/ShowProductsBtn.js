import React, { useContext, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import ProductList from './ProductList';
import { Context } from '../..';
import { Transition } from 'react-transition-group';


const ShowProductsBtn = ({ type }) => {
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
            <Transition
                in={productShow}
                timeout={1000}
                mountOnEnter
                unmountOnExit
            >
                {state => <ProductList state={state} product={productsList} />
                }
            </Transition>
        </Nav>
    );
};

export default ShowProductsBtn;