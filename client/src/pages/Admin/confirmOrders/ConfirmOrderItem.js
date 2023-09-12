import { observer } from "mobx-react-lite";
import OurDateTime from "../../../dateTime/dateTime";
import AssortmentStore from "../../../store/AssortmentStore";
import OrderProductsStore from "../../../store/OrderProductsStore";
import { useState, useEffect } from "react";

function ConfirmOrderItem({ order, user }) {
    const dateTime = new OurDateTime(order.updatedAt)
    const orderProducts = new OrderProductsStore()
    const [orderProductsDinamic, setOrderProductsDinamic] = useState([])

    async function getOrderProducts() {
        await orderProducts.getAllOrderProductsByOrderId(order.id)
        setOrderProductsDinamic(orderProducts._orderProducts)
    }

    useEffect(() => {
        getOrderProducts()
    }, [])

    return (
        <div style={{ border: "1px red solid", marginBottom: "20px" }}>
            <h2>Заказ №{order.id}</h2>
            <p>Имя заказчика: {user.name}</p>
            <p>Номер телефона заказчика: {user.number}</p>
            <p>Адрес доставки: {order.address}</p>
            <p>Последнее обновление статуса: {dateTime.getStringDateTime()}</p>
            <div>
                Заказанные товары:
            </div>
        </div>
    )
}

export default observer(ConfirmOrderItem)