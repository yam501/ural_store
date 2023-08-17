import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import ComplitedOrderProductsStore from '../../store/ComplitedOrderProductsStore';
import OurDateTime from '../../dateTime/dateTime';
import ComplitedOrderProductItem from './ComplitedOrderProductItem';

function ComplitedOrderItem({ user, complitedOrder }) {
    const [complitedOrderProducts, setComplitedOrderProducs] = useState([])
    const complitedOrderProductsStore = new ComplitedOrderProductsStore()

    async function fetchComplitedOrderProducts() {
        await complitedOrderProductsStore.getAllComplitedOrderProductsByComplitedOrderId(complitedOrder.id)
        setComplitedOrderProducs(complitedOrderProductsStore._complitedOrderProducts ?
            complitedOrderProductsStore._complitedOrderProducts : [])
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
                {complitedOrderProducts.map(item =>
                    {
                        //console.log(complitedOrderProduct.assortmentId)
                        return <ComplitedOrderProductItem key={item.id} complitedOrderProduct={item} />}
                )}
            </div>
        </div>
    )
}

export default observer(ComplitedOrderItem)