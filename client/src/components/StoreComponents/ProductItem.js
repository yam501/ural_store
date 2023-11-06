import { observer } from 'mobx-react-lite';
import React, { lazy, useContext, useEffect, useMemo, useState } from 'react';
import { Button, Card, Image, Nav } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './productItem.css'
import { Context } from '../..';
import AddProductToBasketBtn from './AddProductToBasketBtn';

const ProductItem = ({ product, type, deleteBasketProductItem, basketProductsList, productShow }) => {

    const {user, basket, basketProduct} = useContext(Context)
    const [show, setShow] = useState(false);
    const [cardState, setCardState] = useState(false)
    const [isDataSend, setIsDataSend] = useState(false);
    const switchCardState = () => setCardState(!cardState);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [countProduct, setCountProduct] = useState(0)
    const productType = {
        "Мясо": {
            value: countProduct > 999 ? 'кг' : 'гр',
            displayValue: 500,
            additionCount: 100,
            cost: product.costPerOne * countProduct
        },
        "Салаты": {
            value: countProduct > 999 ? 'кг' : 'гр',
            displayValue: 100,
            additionCount: 50,
            cost: product.costPerOne * countProduct
        },
        "Овощи": {
            value: countProduct > 999 ? 'кг' : 'гр',
            displayValue: 100,
            additionCount: 100,
            cost: product.costPerOne * countProduct
        },
        "Выпечка": {
            value: 'шт',
            displayValue: 1,
            additionCount: 1,
            cost: product.costPerOne * countProduct
        },
        "Молочка": {
            value: 'шт',
            displayValue: 1,
            additionCount: 1,
            cost: product.costPerOne * countProduct
        }
    }
    

    const changeCountOfBasketProduct = (action) => {
        if (action === 'minus') {
            basketProduct.changeCountByBasketIDAndAssortmentID(basket.basket.id, product.id, countProduct)
        } else {
            basketProduct.changeCountByBasketIDAndAssortmentID(basket.basket.id, product.id, countProduct)
        }
    }
    useEffect(() => {
        if (isDataSend) {
            const timerId = setTimeout(() => {
            basketProduct.changeCountByBasketIDAndAssortmentID(basket.basket.id, product.id, countProduct);
            setIsDataSend(false);
          }, 2000);
    
          return () => clearTimeout(timerId);
        }
      }, [isDataSend, countProduct, basket.basket.id, product.id, basketProduct]);

    const plus = () => {
        setCountProduct(prevCount => {
            if (countProduct >= productType[type].displayValue) {
            const newCount = prevCount + productType[type].additionCount;
            delaySend(newCount);
            return newCount;
            } else {
                return prevCount;
            }
        })
        
    }
    const minus = () => {
        setCountProduct(prevCount => {
            if (countProduct > productType[type].displayValue) {
            const newCount = prevCount - productType[type].additionCount
            delaySend(newCount)
            return newCount
            } else {
                basketProductsList.map(item => {
                    if (item.assortmentId === product.id) {
                        basketProduct.deleteOneBasketProductByBasketIDAndAssortmentID(item.basketId, product.id);
                    }
                })
                deleteBasketProductItem(product.id);
                setCardState(false)
                return prevCount;
            }
        })

    }

    const delaySend = () => {
        setIsDataSend(true)
    }

    const checkProductItem = () => {
        basketProductsList.map(item => {
            if (item.assortmentId === product.id) {
                setCardState(true);
                setCountProduct(item.count)
            }

        })
        
    }

    useEffect(() => {
        checkProductItem()
    }, [basketProductsList])

    
    useEffect(() => {
        if (productShow && !cardState){
            setCountProduct(productType[type].displayValue)
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
                    <div className='card_btn_box'>
                        <Button className='btn-minus rounded-circle' onClick={() => minus()}>
                            -
                        </Button>
                        <span className='d-flex align-items-center text-center info-text justify-content-center'> {countProduct > 999 ? countProduct/1000 : countProduct} {productType[type].value} </span>
                        <Button className='btn-plus rounded-circle' onClick={() => plus()}>
                            +
                        </Button>
                    </div>
                    </div> :
                    <div className='card_wrapper_content'>
                    <div className='card_wrapper_content_box'>
                    <div className='mb-1 card_wrapper_title_box'>
                        <div className='info-text'>
                            {product.name}
                        </div>
                    </div>
                    
                    <div className='card_wraper_content_inform'>
                        <div className='mb-1 info-text'>
                            {product.costPerOne * productType[type].displayValue} ₽ 
                        </div>
                        <div  className='info-text'>
                           {productType[type].displayValue + productType[type].value}
                        </div>
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