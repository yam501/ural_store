import React, { useContext, useState } from 'react';
import { Image, Button, Form} from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
const BasketItem = (props) => {
    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        countProduct >= 1 && setCountProduct(countProduct + 1)
    }
    const minus = () => {
        countProduct > 1 && setCountProduct(countProduct - 1)
    }

    return (
        <div className='d-flex align-items-center justify-content-between mt-3 mb-3 container product_item'>
            <div className='d-flex align-items-center'>
                <div className='me-3 fw-bold'> 
                    {props.basketProduct.id}
                </div>
                <div className='p-1 img_box'>
                    <Image className='w-100 h-100 product-img' src={process.env.REACT_APP_API_URL + props.product.image} style={{ border: 0 }} />
                </div>
                <div className='mt-3 ms-3 align-self-start'>
                    <p>{`${props.product.name}. ${props.product.description}`}</p>
                </div>
            </div>
            
            <div className='text-center me-3'>
                <div>
                    {props.basketProduct.costPerOne} ₽
                </div>
                <div className='mt-1 d-flex justify-content-center bg-white basket_item_input_box'>
                    <Button className=' d-flex justify-content-center align-items-center btn-plus basket_item_btn rounded-circle me-4 ms-4 bg-white' style={{width: '48px',height: '48px'}} onClick={() => minus()}>
                        -
                    </Button>
                    <Form.Control value={countProduct} onChange={e => setCountProduct(e.target.value)} className='basket_item_cost'/> 
                    <Button className='d-flex justify-content-center align-items-center btn-plus basket_item_btn  rounded-circle ms-4 me-4 bg-white' style={{width: '48px',height: '48px'}} onClick={() => plus()}>
                        +
                    </Button>
                </div>
            </div>
            

        </div>
    );
};

export default observer(BasketItem);