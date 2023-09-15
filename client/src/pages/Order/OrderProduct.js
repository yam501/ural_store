import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import AssortmentStore from '../../store/AssortmentStore';
import { Image } from 'react-bootstrap';

function OrderProduct({ append, orderProduct, ...props }) {
    const [product, setProduct] = useState({})
    const assortmentStore = new AssortmentStore()

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
                            <h2 className='ms-2 order-product-text'>{product.name}</h2>
                        </div>
                        <div className='checkbox-content'>
                            <label className='checkbox-label'>
                                <input type='checkbox'></input>
                                положить больше
                            </label>
                            <label className='checkbox-label'>
                                <input type='checkbox'></input>
                                положить меньше
                            </label>
                        </div>

                        <div className='me-3 order_product_card_inform'>
                            <div className='order_product_card_cost'>{product.costPerOne * orderProduct.count} ₽</div>
                            <div className='order_product_card_count'>Количество: {orderProduct.count}</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default observer(OrderProduct)