import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Image, Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './productItem.css'
import { Context } from '../..';
import AddProductToBasketBtn from './AddProductToBasketBtn';

const ProductItem = ({ product }) => {

    
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        countProduct >= 1 && setCountProduct(countProduct + 1)
    }
    const minus = () => {
        countProduct > 1 && setCountProduct(countProduct - 1)
    }


    return (
        <>
            <Card className='animate__animated animate__fadeInDown card-wrapper products-bg'>
                <Image className='product-img' onClick={handleShow} src={process.env.REACT_APP_API_URL + product.image}/>
                <div className='mt-1 d-flex justify-content-center'>
                    <div className='d-flex align-items-center'>
                        <div className='info-text'>
                            {product.name}
                        </div>
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <div className='info-text'>
                        {product.costPerOne} ₽ цена за кг
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <div className='info-text'>
                        {product.costPerOne * countProduct} ₽
                    </div>
                </div>
                <div className='mt-1 d-flex justify-content-center mb-2'>
                    <Button className=' d-flex justify-content-center align-items-center btn-minus rounded-circle me-4 ms-4'  onClick={() => minus()}>
                        -
                    </Button>
                    <span className='d-flex align-items-center info-text justify-content-center'>{countProduct} кг</span>
                    <Button className='d-flex justify-content-center align-items-center btn-plus rounded-circle ms-4 me-4'  onClick={() => plus()}>
                        +
                    </Button>
                </div>
                <AddProductToBasketBtn product={product} countProduct={countProduct}/>
            </Card>
            <Modal show={show} onHide={handleClose}>
        <Modal.Body className='w-100 h-100 d-flex flex-column justify-content-between'>
            <div className='mb-3 flex-grow-1 image_box'>
                <Image className='w-100 h-100 product-img' src={process.env.REACT_APP_API_URL + product.image} />
            </div>
                    <div className='flex-grow-1'>
                    <div className='mb-1 info-text'>{product.name}</div>
                <div className='mb-1 info-text'>{product.costPerOne} ₽ за кг</div>
                <div className='mb-1 productItem_text info-text'>{countProduct * product.costPerOne} ₽</div>
                <div className='d-flex justify-content-between mb-1'>
                            <Button className=' d-flex justify-content-center align-items-center btn-minus rounded-circle justify-self-start'  onClick={() => minus()}>
                                -
                            </Button>
                            <span className='d-flex align-items-center justify-self-center productItem_text info-text'>{countProduct} кг</span>
                            <Button className='d-flex justify-content-center align-items-center btn-plus rounded-circle justify-self-end'  onClick={() => plus()}>
                                +
                            </Button>
                        </div>
                        <div>
                            <Button className='w-100 btn-addToBasket rounded-3'>
                                В корзину
                            </Button>
                        </div>
                    </div>
                    <div className='mt-2 productItem_text'>
                        Состав: {product.composition}
                    </div>
                </Modal.Body>
            </Modal>
        </>

    );
};

export default observer(ProductItem);