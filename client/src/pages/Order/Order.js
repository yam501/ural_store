import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';


// Страница заказа

function Order() {
  const { user } = useContext(Context)
  const { order } = useContext(Context)
  const { orderProducts } = useContext(Context)

  async function createOrderOrNothing() {
    if (order._order.id) {
      return
    }
    await order.getOrderByUserId(user._user.id)
    if (order._order.id) {
      return
    }
    await order.createOrder(user._user.id, user._user.default, 0)
  }

  useEffect(() => {
    createOrderOrNothing()
  }, [])

  return (
    <Container style={{ margin: "0 auto" }} className='page_body'>
      <h1 style={{ margin: "20px 0" }}>Ваш текущий заказ</h1>
      {
        orderProducts.length != 0 ?
          <div>Вы еще не сформировали свой заказ *Кнопка "В корзину"*</div> :
          <div>ЖЫЖА</div>
      }
    </Container>
  );
}

export default observer(Order);