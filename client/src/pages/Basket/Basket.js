import React, { useState, useContext, useEffect } from 'react';
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
  const { basket } = useContext(Context)
  const { assortment } = useContext(Context)
  const { user } = useContext(Context)
  // basketProduct.getAllBasketProductsByBasketID(user._user.id);    
  const [basketShow, setBasketShow] = useState(false)

  return (
    <div className='mb-5 basket_page'>

      <Container className='justify-content-center text-center page-name'>
        {basketProduct.basketProduct.length === 0 ?
          <div className='d-flex justify-content-center align-items-center basket-empty'>
            Ваша корзина пока что пуста
            <div className='basket-empty-content'>
              <div className='basket-icon'> </div>
              <NavLink className='btn-returnToStore text-white text-decoration-none' to={STORE_ROUTE}>К отделам</NavLink>
            </div>
          </div> : basketProduct.basketProduct.map((basketItem) =>
            <BasketItem key={basketItem.id} user={user._user} basket={basket} product={basketProduct} basketProduct={basketItem} />
          )}
      </Container>

      {basketProduct.basketProduct.length === 0 ? '' :
        <div className='mt-5 d-flex justify-content-between align-items-center order_delive_form'>
          <div>
            Сумма заказа: {basket.basket.aproxSum}  ₽
          </div>
          <div className='w-25'>
            <Button className='w-100 d-flex align-items-center justify-content-center order_delive_form_btn'>
              Заказать
            </Button>
          </div>
        </div>
      }
    </div>
  );
}

export default observer(Basket);