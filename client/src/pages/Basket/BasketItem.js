import React, { useContext, useState, Suspense} from 'react';
import { Image, Button, Form, Spinner } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import './basket.css'
const BasketItem = ({ product, user, basketProduct, basket, ...props }) => {
    const [countProduct, setCountProduct] = useState(basketProduct.count)
    const plus = () => {
        product.changeCountByBasketIDAndAssortmentID(basketProduct.basketId, basketProduct.assortmentId, countProduct + 1)
        basket.getBasketByUserID(user.id)
        countProduct >= 1 && setCountProduct(countProduct + 1)

    }
    const minus = async () => {
        if (countProduct === 1) {
            window.location.reload()
            await product.deleteOneBasketProductByBasketIDAndAssortmentID(basketProduct.basketId, basketProduct.assortmentId);
            await props.deleteItem(basketProduct.assortmentId)
            
        } else {
            product.changeCountByBasketIDAndAssortmentID(basketProduct.basketId, basketProduct.assortmentId, countProduct - 1)
            countProduct > 1 && setCountProduct(countProduct - 1)
        }
        basket.getBasketByUserID(user.id)
    }


    return (

        <div className='d-flex align-items-center justify-content-between mt-3 mb-3 container product_item'>
            <Image className='basket-img' alt='картинка' src={process.env.REACT_APP_API_URL + basketProduct.image}/>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex align-items-center'>
                        <div className='info-text ms-3'>
                            {basketProduct.name}
                        </div>
                    </div>
                </div>
            <div className='text-center'>
                <div className='info-text'>
                    {basketProduct.costPerOne * countProduct} ₽
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <Button type='submit' className=' d-flex justify-content-center align-items-center btn-plus basket_item_btn rounded-circle me-4 ms-4 bg-white'
                        onClick={minus}>
                        -
                    </Button>
                    <Form.Control value={countProduct} onChange={e => setCountProduct(e.target.value)} className='basket_item_cost' />
                    <Button className='d-flex justify-content-center align-items-center btn-plus basket_item_btn  rounded-circle ms-4 me-4 bg-white'
                        onClick={plus}>
                        +
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default observer(BasketItem);