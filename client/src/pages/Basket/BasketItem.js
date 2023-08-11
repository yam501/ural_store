import React, { useContext, useState } from 'react';
import { Image, Button, Form} from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import './basket.css'
const BasketItem = (props) => {

    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        countProduct >= 1 && setCountProduct(countProduct + 1)
        props.changeCount.changeCountByBasketIDAndAssortmentID(props.basketProduct.basketId, props.basketProduct.assortmentId, countProduct)
    }
    const minus = () => {
        countProduct > 1 && setCountProduct(countProduct - 1)
        props.changeCount.changeCountByBasketIDAndAssortmentID(props.basketProduct.basketId, props.basketProduct.assortmentId, countProduct)
    }
    return (
    
        <div className='d-flex align-items-center justify-content-between mt-3 mb-3 container product_item'>
            <div className='d-flex align-items-center'>
                <div className='p-1 img_box'>
                    <Image className='w-100 h-100 product-img' alt='картинка' src={process.env.REACT_APP_API_URL + props.basketProduct.image} />
                </div>
                <div className='mt-3 ms-3 align-self-start'>
                    <p className='info-text'>{props.basketProduct.name}</p>
                </div>
            </div>
            
            <div className='text-center me-3'>
                <div className='info-text'>
                    {props.basketProduct.costPerOne * countProduct} ₽
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <Button className=' d-flex justify-content-center align-items-center btn-plus basket_item_btn rounded-circle me-4 ms-4 bg-white' onClick={() => minus()}>
                        -
                    </Button>
                    <Form.Control value={countProduct} onChange={e => setCountProduct(e.target.value)} className='basket_item_cost'/> 
                    <Button className='d-flex justify-content-center align-items-center btn-plus basket_item_btn  rounded-circle ms-4 me-4 bg-white' onClick={() => plus()}>
                        +
                    </Button>
                </div>
            </div>
            

        </div>
    );
};

export default observer(BasketItem);