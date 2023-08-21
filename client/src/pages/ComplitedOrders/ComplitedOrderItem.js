import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ComplitedOrderProductsStore from '../../store/ComplitedOrderProductsStore';
import OurDateTime from '../../dateTime/dateTime';
import ComplitedOrderProductItem from './ComplitedOrderProductItem';
import { Button } from 'react-bootstrap';

function ComplitedOrderItem({ user, complitedOrder }) {
    const { basket } = useContext(Context)
    const { basketProduct } = useContext(Context)
    const [complitedOrderProducts, setComplitedOrderProducs] = useState([])
    const complitedOrderProductsStore = new ComplitedOrderProductsStore()
    const [productsToRepeat, setProductsToRepeat] = useState([])

    async function fetchComplitedOrderProducts() {
        await complitedOrderProductsStore.getAllComplitedOrderProductsByComplitedOrderId(complitedOrder.id)
        setComplitedOrderProducs(complitedOrderProductsStore._complitedOrderProducts ?
            complitedOrderProductsStore._complitedOrderProducts : [])
    }

    const appendProduct = (product, count) => {
        productsToRepeat.push({...product, count: count})
    }

    async function repeatOrder() {
        await basket.getBasketByUserID(user._user.id)
        productsToRepeat.map(product => {
            if (product.available) {
                basketProduct.createBasketProduct(basket.basket.id, product.id, product.costPerOne, product.count, true)
            }
        }
        )
    }

    useEffect(() => {
        fetchComplitedOrderProducts()
    }, [])

    return (
        <div className="complitedOrderItem">
            <h2 className="complitedOrderItem--title">
                Заказ от {new OurDateTime(complitedOrder.orderTime).getStringDateTime()}
            </h2>
            <p className="complitedOrderItem--paragraph complitedOrderItem--addressParagraph">
                Адрес доставки: {complitedOrder.address}
            </p>
            <p className="complitedOrderItem--paragraph complitedOrderItem--complitedTimeParagraph">
                Был доставлен: {new OurDateTime(complitedOrder.complitedTime).getStringDateTime()}
            </p>
            <p className="complitedOrderItem--paragraph complitedOrderItem--complitedSumParagraph">
                Итоговая стоимость заказа составила: {complitedOrder.complitedSum}
            </p>
            <div>
                {complitedOrderProducts.map(item => {
                    return <ComplitedOrderProductItem key={item.id} complitedOrderProduct={item} append={appendProduct} />
                }
                )}
            </div>
            <Button onClick={repeatOrder}>Повторить заказ</Button>
        </div>
    )
}

export default observer(ComplitedOrderItem)