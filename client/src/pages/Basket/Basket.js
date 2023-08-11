import React, { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './basket.css'
import BasketItem from './BasketItem';
import { Context } from '../..';
import { Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
// Страница корзины 

function Basket() {
    const {basketProduct} = useContext(Context)
    const {basket} = useContext(Context)
    const {assortment} = useContext(Context)
    const {user} = useContext(Context)
    // basketProduct.getAllBasketProductsByBasketID(user._user.id);    

    
    return (
      <div className='mb-5 basket_page'>
        <div className='text-center page-name'> 
          Корзина
        </div>
        {basketProduct.basketProduct.map((basketItem) =>
          <BasketItem key={basketItem.id} user={user._user} basket={basket} product={basketProduct} basketProduct={basketItem}/>
        )}

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
      </div>
      );
    }
  
  export default observer(Basket);