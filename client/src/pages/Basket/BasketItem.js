import React, { useContext, useState } from 'react';
import { Image, Button, Form} from 'react-bootstrap';
import { Context } from '../..';
const BasketItem = (props) => {
    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        countProduct >= 0 && setCountProduct(countProduct + 1)
    }
    const minus = () => {
        countProduct > 0 && setCountProduct(countProduct - 1)
    }
    return (
        <div className='d-flex align-items-center justify-content-between mt-3 mb-3 w-75 container product_item'>
            <div className='d-flex align-items-center'>
                <div className='me-3 fw-bold'>
                    {props.product.id}
                </div>
                <div className='p-1 img_box'>
                    <Image className='w-100 h-100 product-img' src={process.env.REACT_APP_API_URL + props.product.image} style={{ border: 0 }} />
                </div>
                <div className='mt-3 ms-3 align-self-start'>
                    <p>{`${props.product.name} ${props.product.description}`}</p>
                </div>
            </div>
            
            <div className='text-center me-3'>
                <div>
                    {props.product.costPerOne * countProduct} ₽
                </div>
                <div className='mt-1 d-flex justify-content-center '>
                    <Button className=' d-flex justify-content-center align-items-center btn-minus rounded-circle me-4 ms-4' style={{width: '48px',height: '48px'}} onClick={() => minus()}>
                        -
                    </Button>
                    <Form.Control value={countProduct} className='basket_item_cost'/> ₽
                    <Button className='d-flex justify-content-center align-items-center btn-plus rounded-circle ms-4 me-4' style={{width: '48px',height: '48px'}} onClick={() => plus()}>
                        +
                    </Button>
                </div>
            </div>
            

        </div>
    );
};

export default BasketItem;