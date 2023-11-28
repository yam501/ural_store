import React, { useContext, useState, Suspense, useEffect } from 'react';
import { Image, Button, Form, Spinner } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import './basket.css'
import DeleteButton from './DeleteButton';
const BasketItem = ({ basketProduct, user, basketItem, basket, ...props }) => {
    const {product} = useContext(Context)
    const [isDataSend, setIsDataSend] = useState(false);
    const [countProduct, setCountProduct] = useState(basketItem.count)
    const [deleteAccept, setDeleteAccept] = useState(false)
    const productType = {
        "Мясо": {
            value: countProduct > 999 ? 'кг' : 'гр',
            displayValue: 500,
            additionCount: 100,
        },
        "Салаты": {
            value: countProduct > 999 ? 'кг' : 'гр',
            displayValue: 100,
            additionCount: 50,
        },
        "Овощи": {
            value: countProduct > 999 ? 'кг' : 'гр',
            displayValue: 100,
            additionCount: 100,
        },
        "Выпечка": {
            value: 'шт',
            displayValue: 1,
            additionCount: 1,
        },
        "Молочка": {
            value: 'шт',
            displayValue: 1,
            additionCount: 1,
        }
    }

    // useEffect(() => {
    //     assortmentList.map(productItem => productItem.id === basketItem.assortmentId && setbasketItem.type(productItem.basketItem.type))
    // }, [basketItem.id])

    const changeCountProductByInput = (e) => {
        if (e.target.value > 0) {
            setCountProduct((prevCount) => {
                const newCount =+e.target.value;
                delaySend()
                basketItem.count = newCount;
                props.countAproxSum();
                return newCount
            });
        }
    }

    useEffect(() => {
        if (isDataSend) {
            const timerId = setTimeout(() => {
            console.log('gotovo')
            basketProduct.changeCountByBasketIDAndAssortmentID(basket.basket.id, basketItem.assortmentId, countProduct)
            setIsDataSend(false);
          }, 3000);
          
    
          return () => clearTimeout(timerId);
        }
      }, [isDataSend, countProduct, basket.basket.id, basketItem.assortmentId, basketItem]);


    const delaySend = () => {
        setIsDataSend(true)
    }
    const plus = async () => {
        setCountProduct(prevCount => {
            const newCount = prevCount + productType[basketItem.type].additionCount;
            basketItem.count = prevCount + productType[basketItem.type].additionCount;
            props.countAproxSum()
            delaySend();
            return newCount;
        })
    }


    const minus = () => {
        setCountProduct(prevCount => {
            if (countProduct <= productType[basketItem.type].displayValue) {
                basketProduct.deleteOneBasketProductByBasketIDAndAssortmentID(basketItem.basketId, basketItem.assortmentId)
                props.deleteItem(basketItem.assortmentId)
            } else {
                const newCount = prevCount - productType[basketItem.type].additionCount
                basketItem.count = prevCount - productType[basketItem.type].additionCount;
                delaySend()
                return newCount
            }
        })
    }

    

    return (

        <div className='d-flex align-items-center justify-content-between mt-3 mb-3 container product_item'>
            <Image className='basket-img' alt='картинка' src={process.env.REACT_APP_API_URL + basketItem.image} />
            <div className='d-flex justify-content-center'>
                <div className='d-flex align-items-center'>
                    <div className='info-text ms-3'>
                        {basketItem.name}
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='info-text'>
                {countProduct * basketItem.costPerOne} ₽
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <Button type='submit' className=' d-flex justify-content-center align-items-center btn-plus basket_item_btn rounded-circle me-4 ms-4 bg-white'
                        onClick={minus}>
                        {countProduct <=  productType[basketItem.type].displayValue ? <DeleteButton/> : '-'}
                    </Button>
                    <Form.Control value={countProduct > 999 ? countProduct/1000 : countProduct}  onChange={(e) => {
                     changeCountProductByInput(e)
                    }
                    } className='basket_item_cost' />
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