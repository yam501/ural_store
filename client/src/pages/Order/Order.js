import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import OrderProduct from './OrderProduct'


// Страница заказа

function Order() {
  const { user } = useContext(Context)
  const { order } = useContext(Context)
  const { orderProducts } = useContext(Context)
  const [orderProductsDinamic, setOrderProductsDinamic] = useState([])

  async function createOrderProducts() {
    if (JSON.stringify(order._order) !== "{}") {
      await orderProducts.getAllOrderProductsByOrderId(order._order.id)
      setOrderProductsDinamic(orderProducts._orderProducts ? orderProducts._orderProducts : [])
    }
  }

  useEffect(() => {
    createOrderProducts()
  }, [order._order.id])

  return (
    <Container style={{ margin: "0 auto" }} className='page_body'>
      <h1 style={{ margin: "20px 0" }}>Ваш текущий заказ</h1>
      {
        orderProductsDinamic.length === 0 ?
          <div>Вы еще не сформировали свой заказ *Кнопка "В корзину"*</div> :
          <div style={{ border: "1px solid red", padding: "10px" }}>
            {orderProductsDinamic.map(
              orderProduct => <OrderProduct key={orderProduct.id} orderProduct={orderProduct}></OrderProduct>
            )}</div>
      }
    </Container>
  );
}

export default observer(Order);