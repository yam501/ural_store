import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import AssortmentStore from '../../store/AssortmentStore';
import { Image } from 'react-bootstrap';

function ComplitedOrderProductItem({ complitedOrderProduct, append }) {
    const [product, setProduct] = useState(null)
    const assortmentStore = new AssortmentStore()

    async function getProduct() {
        await assortmentStore.getById(complitedOrderProduct.assortmentId)
        setProduct(assortmentStore._assortment ? assortmentStore._assortment : {})
        append(assortmentStore._assortment, complitedOrderProduct.count)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className='complitedOrderProductItem'>
            {product === null ?
                <div>Загрузка</div> :
                <div>
                    <Image className='product-img' alt='Картинка' src={process.env.REACT_APP_API_URL + product.image}></Image>
                    <h3 className="complitedOrderProductItem--title">
                        {product.name}
                    </h3>
                    <p className="complitedOrderProductItem--count">
                        Количество: {complitedOrderProduct.count}
                    </p></div>
            }
        </div>
    )
}

export default observer(ComplitedOrderProductItem)