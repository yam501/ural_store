import React, { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
import './orderStages.css'
const OrderStages = () => {

    const [orderConfirm, setOrderConfirm] = useState(false);
    const [orderPacking, setOrderPacking] = useState(false);
    const [orderDelivery, setOrderDelivery] = useState(false);
    var colorArray = document.getElementsByClassName('order_stages_breakpoint_wrapper')
    console.log(colorArray)

    const confirmed = () => {
        setOrderConfirm(!orderConfirm)
        colorArray[0].style.backgroundColor= '#D6587B';
    }

    const packing = () => {
        setOrderPacking(!orderPacking)
        colorArray[0].style.backgroundColor= '#D6587B';
    }

    const delivery = () => {
        setOrderDelivery(!orderDelivery)
        colorArray[0].style.backgroundColor= '#D6587B';
    }
    return (
        <Stack
            direction='horizontal'
            className='page_body order_stages_wrapper'>
            <div
                className='order_stages_content'>
                <div className='order_stages_breakpoint_wrapper'>
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
                    "Заказ ждет подтверждения"
                    :
                    "Заказ подтвержден"
                }
                <Button onClick={() => confirmed()}>переключатель</Button>
            </div>
            <>
                <div
                    style={{ backgroundColor: "#666", width: '25px', height: '25px', borderRadius: '50px' }}>
                </div>
                <div
                    style={{ backgroundColor: "#666", width: '25px', height: '25px', borderRadius: '50px' }}>
                </div>
                <div
                    style={{ backgroundColor: "#666", width: '25px', height: '25px', borderRadius: '50px' }}>
                </div>
            </>
            <div className='order_stages_content'>
                <div
                    className='order_stages_breakpoint_wrapper'>
                </div>
                {!orderPacking ?
                    "Заказ собирается"
                    :
                    "Заказ собран"
                }
                <Button onClick={() => packing()}>переключатель</Button>
            </div>
            <>
                <div
                    style={{ backgroundColor: "#666", width: '25px', height: '25px', borderRadius: '50px' }}>
                </div>
                <div
                    style={{ backgroundColor: "#666", width: '25px', height: '25px', borderRadius: '50px' }}>
                </div>
                <div
                    style={{ backgroundColor: "#666", width: '25px', height: '25px', borderRadius: '50px' }}>
                </div>
            </>
            <div className='order_stages_content'>
                <div
                    className='order_stages_breakpoint_wrapper'>
                </div>
                {!orderDelivery ?
                    "Передаем заказ курьеру"
                    :
                    "Курьер доставляет заказ"
                }

                <Button onClick={() => delivery()}>переключатель</Button>
            </div>
        </Stack>
    );
};

export default OrderStages;