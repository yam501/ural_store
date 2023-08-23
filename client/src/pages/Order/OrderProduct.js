import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import AssortmentStore from '../../store/AssortmentStore';

function OrderProduct({orderProduct, ...props}) {
    const [product, setProduct] = useState({})
    const assortmentStore = new AssortmentStore()

    async function getProduct() {
        await assortmentStore.getById(orderProduct.assortmentId)
        setProduct(assortmentStore.assortment)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div style={{border: "1px solid green", marginBottom: "10px"}}>
            {console.log(product)}
        </div>
    )
}

export default observer(OrderProduct)