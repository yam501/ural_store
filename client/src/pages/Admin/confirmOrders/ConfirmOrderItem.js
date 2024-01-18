import { observer } from "mobx-react-lite";
import OurDateTime from "../../../dateTime/dateTime";
import OrderProductsStore from "../../../store/OrderProductsStore";
import {useState, useEffect, useContext} from "react";
import OrderStore from "../../../store/OrderStore";
import { Button } from 'react-bootstrap';
import {Context} from "../../../index";


function ConfirmOrderItem({ order, user, sendWS, update }) {
    const {adminOrders} = useContext(Context)
    const dateTime = new OurDateTime(order.updatedAt)
    const orderStore = new OrderStore()
    const orderProducts = new OrderProductsStore()
    const [products, setProducts] = useState([])
    const [onCreate, setOnCreate] = useState(order.onCreate)
    const [onDeliver, setOnDeliver] = useState(order.onDeliver)
    const [delivered, setDelivered] = useState(order.delivered)

    async function getOrderProducts() {
        await orderProducts.getOrderProductsWithAssortmentInfoByOrderId(order.id)
        setProducts(orderProducts._orderProducts ? orderProducts._orderProducts : [])
    }

    async function changeOnCreateState(state) {
        await orderStore.changeOnCreateByOrderId(order.id, state)
        setOnCreate(state)
        sendWS(order.id)
    }

    async function changeOnDeliverState(state) {
        await orderStore.changeOnDeliverByOrderId(order.id, state)
        setOnDeliver(state)
        sendWS(order.id)
    }

    async function changeDeliverState(state) {
        await orderStore.changeDeliveredByOrderId(order.id, state)
        setDelivered(state)
        sendWS(order.id)
    }

    useEffect(() => {
        getOrderProducts()
    }, [])

    async function deleteOrder() {
        await adminOrders.deleteOrder(order.id)
        update()
    }

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
                        return <div><b>{product.name} {product.count} {product.unitsOfMeasurement}</b></div>


                    })}
                </div>
            </div>
            {
                order.canceled ?
                    <div className="confirm_order_item_stages">
                        <div className="confirm_order_item_deny">Заказ отменен</div>
                        <button className="confirm_order_item_btn_deny" onClick={deleteOrder}>Удалить заказ</button>
                    </div>
                    :
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
                                                <Button className="btn_confirm_order_item_stages" onClick={() => changeDeliverState(true)}>Завершить доставку</Button>
                                            </div>
                                    }
                                </div> :
                                <div style={{ display: "none" }}></div>
                        }
                    </div>
            }
        </div>
    )
}

export default observer(ConfirmOrderItem)