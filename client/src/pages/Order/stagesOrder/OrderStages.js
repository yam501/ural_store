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
        <Container
            className='page_body mx-auto order_stages_wrapper'>
            <div
                className='order_stages_content'>
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
            <Container>
                чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу чета снизу
            </Container>
        </Container>
    );
};

export default OrderStages;