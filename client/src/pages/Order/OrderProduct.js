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
                        <div className='order_product_card_image_box'>
                            <Image alt="Картинка" 
                            className='w-100 h-100 order_product_card_image'
                            src={process.env.REACT_APP_API_URL + product.image}></Image>
                            <h2 className='order_product_name'>{product.name}</h2>
                        </div>
                        <div className='order_product_card_inform'>
                            <div className='order_product_card_cost'>{product.costPerOne * orderProduct.count} ₽</div>
                            <div className='order_product_card_count'>Количество: {orderProduct.count}</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default observer(OrderProduct)