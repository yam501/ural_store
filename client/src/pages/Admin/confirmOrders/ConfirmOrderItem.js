import { observer } from "mobx-react-lite";
import OurDateTime from "../../../dateTime/dateTime";
import AssortmentStore from "../../../store/AssortmentStore";
import OrderProductsStore from "../../../store/OrderProductsStore";
import { useState, useEffect } from "react";
import OrderStore from "../../../store/OrderStore";
import { Button } from 'react-bootstrap';

function ConfirmOrderItem({ order, user }) {
    const dateTime = new OurDateTime(order.updatedAt)
    const orderStore = new OrderStore()
    const orderProducts = new OrderProductsStore()
    const assortmentStore = new AssortmentStore()
    const [products, setProducts] = useState([])
    const [onCreate, setOnCreate] = useState(order.onCreate)
    const [onDeliver, setOnDeliver] = useState(order.onDeliver)
    const [delivered, setDelivered] = useState(order.delivered)

    async function getOrderProducts() {
        await orderProducts.getAllOrderProductsByOrderId(order.id)
        let ids = []
        orderProducts._orderProducts.map(orderProduct => {
            ids.push(orderProduct.assortmentId)
        })
        await assortmentStore.getAssortmentByIds(ids.join(' '))
        setProducts(assortmentStore._assortments ? assortmentStore._assortments : [])
    }

    async function changeOnCreateState(state) {
        orderStore.changeOnCreateByOrderId(order.id, state)
        setOnCreate(state)
    }

    async function changeOnDeliverState(state) {
        orderStore.changeOnDeliverByOrderId(order.id, state)
        setOnDeliver(state)
    }

    async function changeDeliverState(state) {
        orderStore.changeDeliveredByOrderId(order.id, state)
        setDelivered(state)
    }

    useEffect(() => {
        getOrderProducts()
    }, [])

    return (
        <div className="confirm_order_item_wrapper">
            <div>
                <h2 className="confir_order_item_info_h">Заказ №{order.id}</h2>
                <div className="confir_order_item_info">Имя: {user.name}</div>
                <div className="confir_order_item_info">Телефон: {user.number}</div>
                <div className="confir_order_item_info">Адрес: {order.address}</div>
                <div className="confir_order_item_info">Последнее обновление статуса: {dateTime.getStringDateTime()}</div>
                <div className="confir_order_item_info">
                    Заказанные товары:
                    {products.map((product) => {
                        return <div><b>{product.name}</b></div>
                    })}
                </div>
            </div>
            <div className="confirm_order_item_stages">
                <div className="confirm_order_item_stages_confirmed">
                    {onCreate ? <div className="confirm_order_item_stages_ready">Подтвержден</div> : <div className="confirm_order_item_stages_wait">Ожидает подтверждения</div>}
                    {
                        onCreate ?
                            <div className="btn_confirm_order_item_stages_wrapper">
                                <Button className="btn_confirm_order_item_stages" disabled={onDeliver} onClick={() => changeOnCreateState(false)}>Отменить заказ</Button>
                            </div>
                            :
                            <div className="btn_confirm_order_item_stages_wrapper">
                                <Button className="btn_confirm_order_item_stages" onClick={() => changeOnCreateState(true)}>Подтвердить заказ</Button>
                            </div>
                    }
                </div>
                {
                    onCreate ?
                        <div className="confirm_order_item_stages_confirmed">
                            {onDeliver ? <div className="confirm_order_item_stages_ready">Готов</div> : <div className="confirm_order_item_stages_wait">Готовится</div>}
                            {
                                onDeliver ?
                                    <div className="btn_confirm_order_item_stages_wrapper">
                                        <Button className="btn_confirm_order_item_stages" disabled={delivered} onClick={() => changeOnDeliverState(false)}>Отменить доставку</Button>
                                    </div>
                                    :
                                    <div className="btn_confirm_order_item_stages_wrapper">
                                        <Button className="btn_confirm_order_item_stages" onClick={() => changeOnDeliverState(true)}>Начать доставку</Button>
                                    </div>
                            }
                        </div> :
                        <div style={{ display: "none" }}></div>
                }

                {
                    onDeliver ?
                        <div className="confirm_order_item_stages_confirmed">
                            {delivered ? <div className="confirm_order_item_stages_ready">Доставлен</div> : <div className="confirm_order_item_stages_wait">Доставляется</div>}
                            {
                                delivered ?
                                    <div className="btn_confirm_order_item_stages_wrapper">
                                        <Button className="btn_confirm_order_item_stages" onClick={() => changeDeliverState(false)}>Отменить готовность</Button>
                                    </div>
                                    :
                                    <div className="btn_confirm_order_item_stages_wrapper">
                                        <Button className="btn_confirm_order_item_stages" onClick={() => setDelivered(true)}>Завершить доставку</Button>
                                    </div>
                            }
                        </div> :
                        <div style={{ display: "none" }}></div>
                }
            </div>
        </div>
    )
}

export default observer(ConfirmOrderItem)