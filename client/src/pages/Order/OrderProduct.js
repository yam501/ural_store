import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import AssortmentStore from '../../store/AssortmentStore';
import { Image } from 'react-bootstrap';
import Toggle from '../../components/Toggle';

function OrderProduct({ append, orderProduct, ...props }) {
    const [product, setProduct] = useState({})
    const assortmentStore = new AssortmentStore()
    const [toggleState, setToggleState] = useState(false)
    const toggleSwitch = () => toggleState ? setToggleState(false) : setToggleState(true);
    async function getProduct() {
        await assortmentStore.getById(orderProduct.assortmentId)
        setProduct(assortmentStore.assortment)
        append(orderProduct, assortmentStore.assortment.id)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div >
            {
                product === null ?
                    <div>Загрузка</div> :
                    <div className='order_product_card'>
                        <Image alt="Картинка"
                            className='order-product-image'
                            src={process.env.REACT_APP_API_URL + product.image}>

                        </Image>
                        <div className='order-product-name'>
                            <h2 className='order-product-text'>{product.name}</h2>
                        </div>

                        <div className='order_product_card_inform'>
                            <div className='order_product_card_cost'>{product.costPerOne * orderProduct.count} ₽</div>
                            <div className='order_product_card_count'>{orderProduct.count} шт</div>
                            {product.type === 'Мясо' || product.type === 'Салаты' || product.type === 'Овощи' ?
                            <div className='checkbox-content'>
                                <Toggle toggleState={toggleState} toggleSwitch={toggleSwitch} />
                            </div>
                            :
                            <div className=' w-100'>
                                <div className='w-100'></div>
                            </div>}
                        </div>
                    </div>
            }
        </div>
    )
}

export default observer(OrderProduct)