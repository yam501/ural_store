import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import AssortmentStore from '../../store/AssortmentStore';

function ComplitedOrderProductItem({complitedOrderProduct}) {
    const [product, setProduct] = useState({})
    const assortmentStore = new AssortmentStore()

    async function getProduct() {
        await assortmentStore.getById(complitedOrderProduct.assortmentId)
        setProduct(assortmentStore._assortment ? assortmentStore._assortment : {})
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className='complitedOrderProductItem'>
            
        </div>
    )
}

export default observer(ComplitedOrderProductItem)