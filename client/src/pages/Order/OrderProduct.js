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
        <div style={{ border: "1px solid green", marginBottom: "10px" }}>
            {
                product === null ?
                    <div>Загрузка</div> :
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <Image alt="Картинка" style={{ height: "300px", width: "300px" }}
                                src={process.env.REACT_APP_API_URL + product.image}></Image>
                            <h2 style={{marginTop: "1rem", marginLeft: "1rem", alignSelf: "flex-start"}}>{product.name}</h2>
                        </div>
                        <div>
                            <div style={{ fontWeight: "500" }}>{product.costPerOne * orderProduct.count} ₽</div>
                            <div>Количество: {orderProduct.count}</div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default observer(OrderProduct)