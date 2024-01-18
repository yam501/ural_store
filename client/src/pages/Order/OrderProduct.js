import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Image } from 'react-bootstrap';
import Toggle from '../../components/Toggle';

function OrderProduct({  orderProduct, ...props }) {
    const [toggleState, setToggleState] = useState(false)
    const toggleSwitch = () => toggleState ? setToggleState(false) : setToggleState(true);

    return (
        <div >
            {
                orderProduct === null ?
                    <div>Загрузка</div> :
                    <div className='order_product_card'>
                        <Image alt="Картинка"
                            className='order-product-image'
                            src={process.env.REACT_APP_API_URL + orderProduct.image}>

                        </Image>
                        <div className='order-product-name'>
                            <h2 className='order-product-text'>{orderProduct.name}</h2>
                            {orderProduct.type === 'Мясо' || orderProduct.type === 'Салаты' || orderProduct.type === 'Овощи' ?
                            <div className='checkbox-content'>
                                <Toggle toggleState={toggleState} toggleSwitch={toggleSwitch} />
                            </div>
                            :
                            <div className=' w-100'>
                                <div className='w-100'></div>
                            </div>}
                        </div>

                        <div className='order_product_card_inform'>
                            <div className='order_product_card_cost'>{orderProduct.costPerOne * orderProduct.count} ₽</div>
                            <div className='order_product_card_count'>{orderProduct.count} {orderProduct.unitsOfMeasurement}</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default observer(OrderProduct)