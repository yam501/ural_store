import { observer } from "mobx-react-lite";
import OurDateTime from "../../../dateTime/dateTime";
import AssortmentStore from "../../../store/AssortmentStore";
import OrderProductsStore from "../../../store/OrderProductsStore";
import { useState, useEffect } from "react";

function ConfirmOrderItem({ order, user }) {
    const dateTime = new OurDateTime(order.updatedAt)
    const orderProducts = new OrderProductsStore()
    const assortmentStore = new AssortmentStore()
    const [orderProductsDinamic, setOrderProductsDinamic] = useState([])
    const [products, setProducts] = useState([])

    async function getOrderProducts() {
        await orderProducts.getAllOrderProductsByOrderId(order.id)
        setOrderProductsDinamic(orderProducts._orderProducts)
        let ids = []
        orderProducts._orderProducts.map(orderProduct => {
            ids.push(orderProduct.assortmentId)
        })
        await assortmentStore.getAssortmentByIds(ids.join(' '))
        setProducts(assortmentStore._assortments ? assortmentStore._assortments : [])
    }

    useEffect(() => {
        getOrderProducts()
    }, [])

    return (
        <div style={{ border: "1px red solid", marginBottom: "20px" }}>
            <h2>Заказ №{order.id}</h2>
            <div>Имя заказчика: {user.name}</div>
            <div>Номер телефона заказчика: {user.number}</div>
            <div>Адрес доставки: {order.address}</div>
            <div>Последнее обновление статуса: {dateTime.getStringDateTime()}</div>
            <div>
                Заказанные товары:
                {products.map((product) => {
                    return <div><b>{product.name}</b></div>
                })}
            </div>
            <button>Подтвердить заказ</button>
        </div>
    )
}

export default observer(ConfirmOrderItem)