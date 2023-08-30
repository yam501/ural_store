import React, { useState, useEffect, useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import OrderProduct from './OrderProduct'
import './order.css'

// Страница заказа

function Order() {
  const { user } = useContext(Context)
  const { order } = useContext(Context)
  const { orderProducts } = useContext(Context)
  const { complitedOrders } = useContext(Context)
  const { complitedOrderProducts } = useContext(Context)
  const [orderProductsDinamic, setOrderProductsDinamic] = useState([])

  const [productsToConfirm, setProductsToConfirm] = useState([])

  const appendProduct = (product, assortmentId) => {
    productsToConfirm.push({...product, assortmentId: assortmentId})
  }

  async function createOrderProducts() {
    if (JSON.stringify(order._order) !== "{}") {
      await orderProducts.getAllOrderProductsByOrderId(order._order.id)
      setOrderProductsDinamic(orderProducts._orderProducts ? orderProducts._orderProducts : [])
    }
  }

  async function createComplitedOrderProduct(orderProduct, complitedOrder) {
    await complitedOrderProducts.createComplitedOrderProducts(complitedOrder.id, orderProduct.assortmentId, orderProduct.count)
  } 

  async function confirmOrder() {
    const complitedOrder = await complitedOrders.createComplitedOrder(user._user.id, user._user.defaultAddress, order._order.aproxSum,
      order._order.updatedAt, order._order.updatedAt)
    productsToConfirm.map((orderProduct) => {
      createComplitedOrderProduct(orderProduct, complitedOrder)
    })
    orderProducts.deleteAllOrderProductsByOrderId(order._order.id)
    setOrderProductsDinamic([])
  }

  useEffect(() => {
    createOrderProducts()
  }, [order._order.id])

  return (
    <div className='page_body'>
      <form>
        <label>Ваш адрес</label>  
        <input type='text'/>
        <label>Ваш подъезд</label>  
        <input type='text'/>
        <label>Ваш этаж</label>  
        <input type='text'/>
        <label>Ваша квартира</label>  
        <input type='text'/>
      </form>
      <div className='order_products_check'>
      <h1 >Ваш текущий заказ</h1>
      {
        orderProductsDinamic.length === 0 ?
          <div>Вы еще не сформировали свой заказ *Кнопка "В корзину"*</div> :
          <div>
            <div>
              {orderProductsDinamic.map(
                orderProduct => <OrderProduct key={orderProduct.id} orderProduct={orderProduct} append={appendProduct}></OrderProduct>
              )}
            </div>
            <Button >Подтвердить заказ</Button>
          </div>
      }
      </div>
      <button onClick={confirmOrder}>
          Подтвердить заказ
      </button>
     
    </div>
  );
}

export default observer(Order);