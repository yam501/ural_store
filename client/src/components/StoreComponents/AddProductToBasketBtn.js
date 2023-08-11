import React, {useContext, useState} from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Context } from '../..';

const AddProductToBasketBtn = ({product, countProduct}) => {
    const [text, setText] = useState(false)
    const {basketProduct} = useContext(Context)
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    const addProductInBasket = () => {
        basketProduct.createBasketProduct(user._user.id, product.id, product.costPerOne * countProduct, countProduct, false)
        basketProduct.getAllBasketProductsByBasketID(user._user.id)
    }
    return (
        <Nav className='d-felx justify-content-center mt-2'>
        <div className='text-white fb-2'>
            
        </div>
        <Button onClick={addProductInBasket} className='btn-addToBasket w-50 mb-2 rounded-5'>
            В корзину
        </Button>
    </Nav>
    );
};

export default AddProductToBasketBtn;