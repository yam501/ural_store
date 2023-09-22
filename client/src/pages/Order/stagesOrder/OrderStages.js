import React, { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import './orderStages.css'
const OrderStages = () => {

    const [orderConfirm, setOrderConfirm] = useState(false);
    const [orderPacking, setOrderPacking] = useState(false);
    const [orderDelivery, setOrderDelivery] = useState(false);
    var colorArray = document.getElementsByClassName('order_stages_breakpoint_wrapper')
    var colorDotsArray = document.getElementsByClassName('order_stage_dots')
    console.log(colorArray)
    const confirmed = () => {
        setOrderConfirm(!orderConfirm)
        colorArray[0].style.backgroundColor = '#D6587B';
        colorDotsArray[0].style.backgroundColor = '#D6587B';
        colorDotsArray[1].style.backgroundColor = '#D6587B';
        colorDotsArray[2].style.backgroundColor = '#D6587B';
    }

    const packing = () => {
        setOrderPacking(!orderPacking)
        colorArray[1].style.backgroundColor = '#D6587B';
        colorDotsArray[3].style.backgroundColor = '#D6587B';
        colorDotsArray[4].style.backgroundColor = '#D6587B';
        colorDotsArray[5].style.backgroundColor = '#D6587B';
    }

    const delivery = () => {
        setOrderDelivery(!orderDelivery)
        colorArray[2].style.backgroundColor = '#D6587B';
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
                        <div className='mt-5'>
                            Заказ ждет подтверждения
                        </div>
                        :
                        <div className='mt-5'>
                            Заказ подтвержден
                        </div>
                    }
                    {/* <Button onClick={() => confirmed()}>переключатель</Button> */}
                </div>
                <>
                    <div
                        className='order_stage_dots'>
                    </div>
                    <div
                        className='order_stage_dots'>
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
                        <div className='mt-5'>
                            Заказ собирается
                        </div>
                        :
                        <div className='mt-5'>
                            Заказ собран
                        </div>
                    }
                    {/* <Button onClick={() => packing()}>переключатель</Button> */}
                </div>
                <>
                    <div
                        className='order_stage_dots'>
                    </div>
                    <div
                        className='order_stage_dots'>
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
                        <div className='mt-5'>
                            Передаем заказ курьеру
                        </div>
                        :
                        <div className='mt-5'>
                            Курьер доставляет заказ
                        </div>
                    }

                    {/* <Button onClick={() => delivery()}>переключатель</Button> */}
                </div>

            </div>
            <Container className='order_stages_downContent mt-5'>
                <div className='order_stages_downContent_left'>тут будут товары которые чел заказал</div>
                <div className='mt-3 mb-3' style={{width: '3px',backgroundColor: '#f1f1f1'}}></div>
                <div className='order_stages_downContent_right'>
                    <div className='order_stages_downContent_courierNumber'>
                        Телефона курьера: +7(999)9990011
                    </div>
                    <hr/>
                    <div className='order_stages_downContent_order_details mt-2'>
                        <div className='order_stages_downContent_order_number'>
                            <div>
                                Детали заказа
                            </div>
                            <div>
                                номер заказа
                            </div>
                        </div>
                        <hr/>
                        <label className='order_stages_downContent_adres'>Адрес доставки: ул. Максима Горького 26, подъезд 3, этаж 3, кв 65</label>
                        <hr/>
                        <label className='order_stages_downContent_comment mt-2'>Комментарий:
                            <div className='d-flex w-100'>
                                <div className='order_stages_downContent_comment_text me-2'>сюда передать текст </div>
                                <Button className='btn_edit_order_comment'></Button>
                            </div>
                        </label>
                        <hr/>
                        <label className='order_stages_downContent_tel mt-2'>Телефон:
                        <div className='d-flex w-100'>
                            <div className='order_stages_downContent_comment_text me-2'>+7(999)0005511 </div>
                            <Button className='btn_edit_order_comment'></Button>
                            </div>
                        </label>
                        <Button className='btn_cancel_order w-100'>Отменить заказ</Button>
                    </div>
                </div>

            </Container>
        </Container>
    );
};

export default OrderStages;