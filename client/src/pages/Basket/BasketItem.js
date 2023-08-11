import React, { useContext, useState } from 'react';
import { Image, Button, Form} from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import './basket.css'
const BasketItem = ({product, user, basketProduct, basket, ...props}) => {

    const [countProduct, setCountProduct] = useState(basketProduct.count)
    const plus = () => {
        product.changeCountByBasketIDAndAssortmentID(basketProduct.basketId, basketProduct.assortmentId, countProduct + 1)
        basket.getBasketByUserID(user.id) 
        countProduct >= 1 && setCountProduct(countProduct + 1)
        
    }
    const minus = () => {
        if (countProduct === 1) {
            product.deleteOneBasketProductByBasketIDAndAssortmentID(basketProduct.basketId, basketProduct.assortmentId);
            product.getAllBasketProductsByBasketID(basketProduct.basketId)
        } else {
            product.changeCountByBasketIDAndAssortmentID(basketProduct.basketId, basketProduct.assortmentId, countProduct-1)
            countProduct > 1 && setCountProduct(countProduct - 1)
        }
        basket.getBasketByUserID(user.id) 
    }
    return (
    
        <div className='d-flex align-items-center justify-content-between mt-3 mb-3 container product_item'>
            <div className='d-flex align-items-center'>
                <div className='p-1 img_box'>
                    <Image className='w-100 h-100 product-img' alt='картинка' src={process.env.REACT_APP_API_URL + basketProduct.image} />
                </div>
                <div className='mt-3 ms-3 align-self-start'>
                    <p className='info-text'>{basketProduct.name}</p>
                </div>
            </div>
            
            <div className='text-center me-3'>
                <div className='info-text'>
                    {basketProduct.costPerOne * countProduct} ₽
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <Button className=' d-flex justify-content-center align-items-center btn-plus basket_item_btn rounded-circle me-4 ms-4 bg-white' onClick={() => minus()}>
                        -
                    </Button>
                    <Form.Control value={countProduct} onChange={e => setCountProduct(e.target.value)} className='basket_item_cost'/> 
                    <Button className='d-flex justify-content-center align-items-center btn-plus basket_item_btn  rounded-circle ms-4 me-4 bg-white' 
                    onClick={() => plus()}>
                        +
                    </Button>
                </div>
            </div>
            

        </div>
    );
};

export default observer(BasketItem);