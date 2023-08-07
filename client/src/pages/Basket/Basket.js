import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import './basket.css'
import BasketItem from './BasketItem';
import { Context } from '../..';
import { Container } from 'react-bootstrap';
// Страница корзины 

function Basket() {
    const {basketProduct} = useContext(Context)
    const {product} = useContext(Context)
    return (
      <div className='mb-5 basket_page'>
        <div className='fs-2 text-center'> 
          Корзина
        </div>
        {basketProduct.map((basketItem, i) => 
          <BasketItem basketProduct={basketItem} product={product[i]}/>
        )}

        <div className='w-100 mt-5 d-flex justify-content-between align-items-center order_delive_form'>
            <div>
              Сумма заказа: 500 ₽ 
            </div>
            <div>
              <Button className='order_delive_form_btn'>
                Заказать
              </Button>
            </div>
        </div>
      </div>
      );
    }
  
  export default Basket;