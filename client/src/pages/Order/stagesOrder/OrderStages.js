import React, {useContext, useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import './orderStages.css'
import {Context} from '../../..';
import OrderProduct from '../OrderProduct';
import {io} from 'socket.io-client'
import OrderProductStage from "./OrderProductStage";

const OrderStages = () => {

    const [orderConfirm, setOrderConfirm] = useState(false);
    const [orderPacking, setOrderPacking] = useState(false);
    const [orderDelivery, setOrderDelivery] = useState(false);
    const [orderProductsDinamic, setOrderProductsDinamic] = useState([])
    const {orderProducts} = useContext(Context)
    const {order} = useContext(Context)
    const {user} = useContext(Context)
    var colorArray = document.getElementsByClassName('order_stages_breakpoint_wrapper')
    var colorSmallDotsArray = document.getElementsByClassName('order_stage_small_dots')
    var colorDotsArray = document.getElementsByClassName('order_stage_dots')

    const socket = io(process.env.REACT_APP_API_URL, {
        path: "/webSocket/"
    })

    async function updateOrder() {
        await order.getOrderByOrderId(order.order.id)
        setOrderDelivery(order.order.delivered)
        if (order.order.delivered) {
            delivery()
        } else {
            notDelivery()
        }
        setOrderPacking(order.order.onDeliver)
        if (order.order.onDeliver) {
            packing()
        } else {
            notPacking()
        }
        setOrderConfirm(order.order.onCreate)
        if (order.order.onCreate) {
            confirmed()
        } else {
            notConfirmed()
        }
    }

    socket.on('update', message => {
        updateOrder()
    })

    async function getOrderProducts() {
        await order.getOneOrderByUserId(user._user.id)
        setOrderDelivery(order.order.delivered)
        if (order.order.delivered) {
            delivery()
        } else {
            notDelivery()
        }
        setOrderPacking(order.order.onDeliver)
        if (order.order.onDeliver) {
            packing()
        } else {
            notPacking()
        }
        setOrderConfirm(order.order.onCreate)
        if (order.order.onCreate) {
            confirmed()
        } else {
            notConfirmed()
        }
        await orderProducts.getOrderProductsWithAssortmentInfoByOrderId(order.order.id)
        setOrderProductsDinamic(orderProducts.orderProducts ? orderProducts.orderProducts : [])
        console.log(order.order)
        socket.emit("messageFromUser", {"orderId": order.order.id})
    }

    useEffect(() => {
        getOrderProducts()
    }, [])

    // console.log(colorArray)
    const confirmed = () => {
        // setOrderConfirm(!orderConfirm)
        colorArray[0].style.backgroundColor = '#D6587B';
        colorDotsArray[0].style.backgroundColor = '#D6587B';
        colorDotsArray[1].style.backgroundColor = '#D6587B';
        colorDotsArray[2].style.backgroundColor = '#D6587B';
        colorSmallDotsArray[0].style.backgroundColor = '#D6587B';
        colorSmallDotsArray[1].style.backgroundColor = '#D6587B';
    }

    const notConfirmed = () => {
        // setOrderConfirm(!orderConfirm)
        colorArray[0].style.backgroundColor = '#D9D9D9';
        colorDotsArray[0].style.backgroundColor = '#D9D9D9';
        colorDotsArray[1].style.backgroundColor = '#D9D9D9';
        colorDotsArray[2].style.backgroundColor = '#D9D9D9';
        colorSmallDotsArray[0].style.backgroundColor = '#D9D9D9';
        colorSmallDotsArray[1].style.backgroundColor = '#D9D9D9';
    }


    const packing = () => {
        // setOrderPacking(!orderPacking)
        colorArray[1].style.backgroundColor = '#D6587B';
        colorDotsArray[3].style.backgroundColor = '#D6587B';
        colorDotsArray[4].style.backgroundColor = '#D6587B';
        colorDotsArray[5].style.backgroundColor = '#D6587B';
        colorSmallDotsArray[2].style.backgroundColor = '#D6587B';
        colorSmallDotsArray[3].style.backgroundColor = '#D6587B';
    }

    const notPacking = () => {
        // setOrderPacking(!orderPacking)
        colorArray[1].style.backgroundColor = '#D9D9D9';
        colorDotsArray[3].style.backgroundColor = '#D9D9D9';
        colorDotsArray[4].style.backgroundColor = '#D9D9D9';
        colorDotsArray[5].style.backgroundColor = '#D9D9D9';
        colorSmallDotsArray[2].style.backgroundColor = '#D9D9D9';
        colorSmallDotsArray[3].style.backgroundColor = '#D9D9D9';
    }

    const delivery = () => {
        // setOrderDelivery(!orderDelivery)
        colorArray[2].style.backgroundColor = '#D6587B';
    }


    const notDelivery = () => {
        // setOrderDelivery(!orderDelivery)
        colorArray[2].style.backgroundColor = '#D9D9D9';
    }

    const [commentChange, setCommentChange] = useState(true);
    const [numberChange, setNumberChange] = useState(true);
    const [orderClose, setOrderClose] = useState(false);
    const changeComment = () => {
        setCommentChange(!commentChange);
    }

    const changeNumber = () => {
        setNumberChange(!numberChange);
    }

    return (
        <Container className='page_body mx-auto order_stages_wrapper mb-5'>
            <div className='order_stages_wrapper'>
                <div className='order_stages_content'>
                    <div className='order_stages_breakpoint_wrapper mt-5'>
                        {!orderConfirm ?
                            <div
                                className='order_stages_breakpoint_confirmFalse'>
                            </div>
                            :
                            <div
                                className='order_stages_breakpoint_confirmTrue'>
                            </div>
                        }
                    </div>
                    {!orderConfirm ?
                        <div className='order_stages_breakpoint_text mt-3'>
                            Заказ ждет подтверждения
                        </div>
                        :
                        <div className='order_stages_breakpoint_text mt-3'>
                            Заказ подтвержден
                        </div>
                    }
                </div>
                <>
                    <div
                        className='order_stage_dots'>
                    </div>
                    <div
                        className='order_stage_dots'>
                    </div>
                    <div
                        className='order_stage_small_dots'>
                    </div>
                    <div
                        className='order_stage_small_dots'>
                    </div>
                    <div
                        className='order_stage_dots'>
                    </div>
                </>
                <div className='order_stages_content'>
                    <div
                        className='order_stages_breakpoint_wrapper mt-5'>
                        {!orderPacking ?
                            <div
                                className='order_stages_breakpoint_packingFalse'>
                            </div>
                            :
                            <div
                                className='order_stages_breakpoint_confirmTrue'>
                            </div>
                        }
                    </div>
                    {!orderPacking ?
                        <div className='order_stages_breakpoint_text mt-3'>
                            Заказ собирается
                        </div>
                        :
                        <div className='order_stages_breakpoint_text mt-3'>
                            Заказ собран
                        </div>
                    }
                </div>
                <>
                    <div
                        className='order_stage_dots'>
                    </div>
                    <div
                        className='order_stage_dots'>
                    </div>
                    <div
                        className='order_stage_small_dots'>
                    </div>
                    <div
                        className='order_stage_small_dots'>
                    </div>
                    <div
                        className='order_stage_dots'>
                    </div>
                </>
                <div className='order_stages_content'>
                    <div
                        className='order_stages_breakpoint_wrapper mt-5'>
                        {!orderDelivery ?
                            <div
                                className='order_stages_breakpoint_deliveryFalse'>
                            </div>
                            :
                            <div
                                className='order_stages_breakpoint_confirmTrue'>
                            </div>
                        }
                    </div>
                    {!orderDelivery ?
                        <div className='order_stages_breakpoint_text mt-3'>
                            Заказ доставляется
                        </div>
                        :
                        <div className='order_stages_breakpoint_text mt-3'>
                            Заказ доставлен
                        </div>
                    }

                </div>

            </div>
            <Container className='order_stages_downContent mt-5'>
                <div className='order_stages_downContent_left'>{
                    // orderProduct => <OrderProduct key={orderProduct.id} orderProduct={orderProduct} ></OrderProduct>
                    orderProductsDinamic.length === 0 ?
                        <div>Загрузка товаров</div> :
                        orderProductsDinamic.map(orderProduct => {
                            return <OrderProductStage key={orderProduct.id}
                                                      orderProduct={orderProduct}></OrderProductStage>
                        })
                }</div>
                <div style={{width: '3px', backgroundColor: '#f1f1f1'}}></div>
                <div className='order_stages_downContent_right'>
                    <div className='order_stages_downContent_courierNumber'>
                        Телефон курьера: {order.order.courierNumber}
                    </div>
                    <hr/>
                    <div className='order_stages_downContent_order_details mt-2'>
                        <div className='order_stages_downContent_order_number'>
                            <div>
                                Детали заказа
                            </div>
                            <div>
                                Заказ номер {order.order.id}
                            </div>
                        </div>
                        <hr/>
                        <label className='order_stages_downContent_adres'>Адрес доставки: {order.order.address}</label>
                        <hr/>
                        <label className='order_stages_downContent_comment mt-2'>Комментарий:
                            <div className='d-flex order_stages_downContent_comment'>
                                <textarea disabled={commentChange} placeholder={order.order.comment}
                                          className='order_stages_downContent_textarea mt-2 me-2'></textarea>
                                <Button onClick={() => changeComment()} className='btn_edit_order_comment'></Button>
                            </div>
                        </label>
                        <hr/>
                        <label className='order_stages_downContent_tel mt-2'>Телефон:
                            <div className='d-flex order_stages_downContent_comment'>
                                <input disabled={numberChange} placeholder={order.order.number}
                                       className='order_stages_downContent_input mt-2 me-2'></input>
                                <Button onClick={() => changeNumber()} className='btn_edit_order_comment'></Button>
                            </div>
                        </label>
                        {!orderClose &&
                            <>
                                <Button onClick={() => setOrderClose(true)} className='btn_cancel_order w-100'>Отменить
                                    заказ</Button>
                            </>
                        }
                        {orderClose &&
                            <>
                                <hr/>
                                <div>
                                    <span>Вы точно хотите отменить заказ?</span>
                                    <div className="d-flex justify-content-around">
                                        <Button className="btn_confirm_cancel_order"> Да</Button>
                                        <Button className="btn_cancel_order"
                                                onClick={() => setOrderClose(false)}> Отмена</Button>
                                    </div>
                                </div>
                            </>

                        }
                    </div>
                </div>

            </Container>
        </Container>
    );
};

export default OrderStages;