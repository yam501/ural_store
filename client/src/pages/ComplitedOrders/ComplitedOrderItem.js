import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ComplitedOrderProductsStore from '../../store/ComplitedOrderProductsStore';
import OurDateTime from '../../dateTime/dateTime';
import ComplitedOrderProductItem from './ComplitedOrderProductItem';
import { Button } from 'react-bootstrap';
import AssortmentStore from '../../store/AssortmentStore';

function ComplitedOrderItem({ user, complitedOrder }) {
    const { basket } = useContext(Context)
    const { basketProduct } = useContext(Context)
    const assortmentStore = new AssortmentStore()
    const [complitedOrderProducts, setComplitedOrderProducs] = useState([])
    const complitedOrderProductsStore = new ComplitedOrderProductsStore()

    async function fetchComplitedOrderProducts() {
        await complitedOrderProductsStore.getAllComplitedOrderProductsByComplitedOrderId(complitedOrder.id)
        let ids = []
        complitedOrderProductsStore._complitedOrderProducts.forEach(complitedOrderProduct => {
            ids.push(complitedOrderProduct.assortmentId)
        })
        await assortmentStore.getAssortmentByIds(ids.join(' '))
        let toComplitedOrderProducts = complitedOrderProductsStore._complitedOrderProducts.map(complitedOrderProduct => {
            let product = assortmentStore._assortments.filter(item => item.id === complitedOrderProduct.assortmentId)[0]
            return {...complitedOrderProduct, ...product}
        })
        setComplitedOrderProducs(toComplitedOrderProducts ?
            toComplitedOrderProducts : [])
    }

    async function repeatOrder() {
        await basket.getBasketByUserID(user._user.id)
        complitedOrderProducts.map(product => {
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
            <h2 className="historyOrder-title">
                Заказ от {new OurDateTime(complitedOrder.orderTime).getStringDateTime()}
            </h2>
            <p className='historyOrder-text'>
                Адрес доставки: {complitedOrder.address}
            </p>
            <p className='historyOrder-text'>
                Был доставлен: {new OurDateTime(complitedOrder.complitedTime).getStringDateTime()}
            </p>
            <p className='historyOrder-text'>
                Итоговая стоимость заказа составила: {complitedOrder.complitedSum}
            </p>
            <div className='historyOrder-content'>
                <div className='historyOrder-products'>
                    {complitedOrderProducts.map(item => {
                        return <ComplitedOrderProductItem key={item.id} complitedOrderProduct={item} />
                    }
                    )}
                </div>
                <Button className='btn-repeat' onClick={repeatOrder}>Повторить заказ</Button>
            </div>
        </div>
    )
}

export default observer(ComplitedOrderItem)