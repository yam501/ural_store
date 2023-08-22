import React, { useState, useContext, useEffect, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import './basket.css'
import BasketItem from './BasketItem';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { STORE_ROUTE } from '../../utils/consts';
// Страница корзины 

function Basket() {
  const { basketProduct } = useContext(Context)
  const [basketProducts, setBasketProducts] = useState([])
  const { basket } = useContext(Context)
  const { assortment } = useContext(Context)
  const { user } = useContext(Context)
  const { order } = useContext(Context)
  const { orderProducts } = useContext(Context)

  async function createOrderOrNothing() {
    if (JSON.stringify(order._order) !== '{}') {
      return
    }
    await order.getOrderByUserId(user._user.id)
    if (order._order !== null) {
      return
    }
    await order.createOrder(user._user.id, user._user.default, 0)
  }

  async function transferToOrder() {
    await createOrderOrNothing()
    await orderProducts.deleteAllOrderProductsByOrderId(order._order.id)
    basketProduct._basketProducts.map((basketItem) => {
      orderProducts.createOrderProduct(order._order.id, basketItem.assortmentId, basketItem.count, true)
    })
  }

  // const [basketAproxSum, setBasketAproxSum] = useState(basket.basket.aproxSum)
  function sortById(id) {
    return (a, b) => a[id] > b[id] ? 1 : -1;
  }

  async function renderBasketItems() {
    if (JSON.stringify(basket._baskets) !== "{}") {
      await basketProduct.getAllBasketProductsByBasketID(basket._baskets.id)
    }
    setBasketProducts(basketProduct.basketProduct ? basketProduct.basketProduct : [])
  }

  useEffect(() => {
    renderBasketItems()
  }, [basket._baskets.id])

  const basketItems = useMemo(() => {
    return basketProducts.slice().sort(sortById('id'))
  }, [basketProducts])
  return (
    <div className='mb-5 basket_page'>
      <Container className='justify-content-center text-center page-name'>
        {basketItems.length === 0 ?
          <div className='d-flex justify-content-center align-items-center basket-empty'>
            Ваша корзина пока что пуста
            <div className='basket-empty-content'>
              <div className='basket-icon'> </div>
              <NavLink className='btn-returnToStore text-white text-decoration-none' to={STORE_ROUTE}>К отделам</NavLink>
            </div>
          </div> : basketItems.map((basketItem) =>
            <BasketItem key={basketItem.id} user={user._user} basket={basket} product={basketProduct} basketProduct={basketItem} />
          )}
      </Container>

      {basketProduct.basketProduct.length > 0 &&
        <div className='mt-2 d-flex justify-content-between align-items-center order_delive_form'>
          <div>
            Сумма заказа: {basket.basket.aproxSum} ₽
          </div>
          <div className='w-25'>
            <Button
              className='w-100 d-flex align-items-center justify-content-center order_delive_form_btn'
              onClick={transferToOrder}
            >
              Заказать
            </Button>
          </div>
        </div>
      }
    </div>
  );
}

export default observer(Basket);