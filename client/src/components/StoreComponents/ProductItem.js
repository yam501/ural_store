import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Image, Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './productItem.css'
import { Context } from '../..';
import AddProductToBasketBtn from './AddProductToBasketBtn';

const ProductItem = ({ product, type, productShow }) => {

    const { basketProduct } = useContext(Context)
    const { user } = useContext(Context)
    const [show, setShow] = useState(false);
    const [cardState, setCardState] = useState(false)
    const switchCardState = () => setCardState(!cardState);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [countProduct, setCountProduct] = useState(1)
    const plus = () => {
        countProduct >= productType[type].count() && setCountProduct(countProduct + productType[type].count())
    }
    const minus = () => {
        countProduct > productType[type].count() && setCountProduct(countProduct - productType[type].count())
    }
    
    const productType = {
        "Мясо": {
            value: 'кг',
            count: () => {
                setCountProduct(1)
                return 1
            },
            cost: product.costPerOne * countProduct
        },
        "Салаты": {
            value: 'гр',
            count: () => {
                setCountProduct(50)
                return 50
            },
            cost: (product.costPerOne * (countProduct / 50))/2
        },
        "Овощи": {
            value: 'кг',
            count: () => {
                setCountProduct(1)
                return 1
            },
            cost: product.costPerOne * countProduct
        },
        "Выпечка": {
            value: 'шт',
            count: () => {
                setCountProduct(1)
                return 1
            },
            cost: product.costPerOne * countProduct
        },
        "Молочка": {
            value: 'шт',
            count: () => {
                setCountProduct(1)
                return 1
            },
            cost: product.costPerOne * countProduct
        }
    }

    useEffect(() => {
        if (productShow){
            productType[type].count()
        }
    },[productShow])

    return (
        <>
            <div className='card_wrapper products_bg'>
                <Image className='product-img' onClick={handleShow} src={process.env.REACT_APP_API_URL + product.image} />
                {cardState ?
                    <div className='card_wrapper_content'>
                     <div className='mt-1 d-flex justify-content-center'>
                        <div className='d-flex align-items-center card_wrapper_title_box'>
                            <div className='info-text'>
                                {product.name}
                            </div>
                        </div>
                    </div>                       
                    <div className='mt-1 d-flex justify-content-center'>
                        <div className='info-text'>
                            {productType[type].cost} ₽
                        </div>
                    </div>
                    <div className='mt-1 d-flex justify-content-between mb-2'>
                        <Button className='btn-minus rounded-circle' onClick={() => minus()}>
                            -
                        </Button>
                        <span className='d-flex align-items-center info-text justify-content-center'>{countProduct} {productType[type].value} </span>
                        <Button className='btn-plus rounded-circle' onClick={() => plus()}>
                            +
                        </Button>
                    </div>
                    </div> :
                    <div className='card_wrapper_content'>
                    <div className='mt-1 d-flex justify-content-center'>
                        <div className='d-flex align-items-center card_wrapper_title_box'>
                            <div className='info-text'>
                                {product.name}
                            </div>
                        </div>
                    </div>
                    <div className='mt-1 d-flex justify-content-center'>
                        <div className='info-text'>
                            {product.costPerOne} ₽ за {`${type === 'Салаты' ? 100 : 1} ${productType[type].value}`}
                        </div>
                    </div>

                    <AddProductToBasketBtn product={product} switchCardState={switchCardState} type={type} countProduct={countProduct} />

                    </div>
                }
                
               
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='w-100 h-100 d-flex flex-column justify-content-between'>
                    <div className='mb-3 flex-grow-1 image_box'>
                        <Image className='w-100 h-100 product-img' src={process.env.REACT_APP_API_URL + product.image} />
                    </div>
                    <div className='flex-grow-1'>
                        <div className='mb-1 info-text'>{product.name}</div>
                        <div className='mb-1 info-text'>{product.costPerOne} ₽ за {productType[type].value}</div>
                        <div className='mb-1 productItem_text info-text'>{productType[type].cost} ₽</div>
                        <div className='d-flex justify-content-between mb-1'>
                            <Button className='btn-minus rounded-circle justify-self-start' onClick={() => minus()}>
                                -
                            </Button>
                            <span className='d-flex align-items-center justify-self-center productItem_text info-text'>{countProduct} {productType[type].value}</span>
                            <Button className='btn-plus rounded-circle justify-self-end' onClick={() => plus()}>
                                +
                            </Button>
                        </div>
                        <div>
                            <AddProductToBasketBtn product={product} cost={productType[type].cost} countProduct={countProduct} />
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