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
    const [onConfirm, setOnConfirm] = useState(order.onConfirm)
    const [onCreate, setOnCreate] = useState(order.onCreate)
    const [onDeliver, setOnDeliver] = useState(order.onDeliver)
    const [delivered, setDelivered] = useState(order.delivered)

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

    async function changeOnConfirmState(state) {
        setOnConfirm(state)
    }

    async function changeOnCreateState(state) {
        setOnCreate(state)
    }

    async function changeOnDeliverState(state) {
        setOnDeliver(state)
    }

    async function changeDeliverState(state) {
        setDelivered(state)
    }

    useEffect(() => {
        getOrderProducts()
    }, [])

    return (
        <div style={{ border: "1px red solid", marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
            <div>
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
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {onCreate ? <div style={{ color: "green" }}>Подтвержден</div> : <div style={{ color: "red" }}>Ожидает подтверждения</div>}
                    {
                        onCreate ?
                            <button onClick={() => changeOnCreateState(false)}>Отменить заказ</button> :
                            <button onClick={() => changeOnCreateState(true)}>Подтвердить заказ</button>
                    }
                </div>
                {
                    onCreate ?
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {onDeliver ? <div style={{ color: "green" }}>Готов</div> : <div style={{ color: "red" }}>Готовится</div>}
                            {
                                onDeliver ?
                                    <button onClick={() => changeOnDeliverState(false)}>Отменить доставку</button> :
                                    <button onClick={() => changeOnDeliverState(true)}>Начать доставку</button>
                            }
                        </div> :
                        <div style={{ display: "none" }}></div>
                }

                {
                    onDeliver ?
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {delivered ? <div style={{ color: "green" }}>Доставлен</div> : <div style={{ color: "red" }}>Доставляется</div>}
                            {
                                delivered ?
                                    <button onClick={() => changeDeliverState(false)}>Отменить готовность</button> :
                                    <button onClick={() => setDelivered(true)}>Завершить доставку</button>
                            }
                        </div> :
                        <div style={{ display: "none" }}></div>
                }
            </div>
        </div>
    )
}

export default observer(ConfirmOrderItem)