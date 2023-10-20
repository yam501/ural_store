import React, { useState, useEffect, useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import OrderProduct from './OrderProduct'
import './order.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../../utils/consts';
import GPS from '../../components/YndexMaps/GPS';
import ModalWindowYMaps from '../../components/YndexMaps/ModalWindowYMaps';
import OrderStages from './stagesOrder/OrderStages';

// Страница заказа

function Order() {
  const { user } = useContext(Context)
  const { order } = useContext(Context)
  const { basket } = useContext(Context)
  const { basketProduct } = useContext(Context)
  const { orderProducts } = useContext(Context)
  const [orderProductsDinamic, setOrderProductsDinamic] = useState([])
  const [dataOfOrder, setDataOfOrder] = useState({ address: '', enter: '', floor: '', flat: '', tel: '' })
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false);
  const [aproxSum, setAproxSum] = useState(0);

  async function createOrderProductsFromBasketProducts() {
    if (JSON.stringify(basket._baskets) !== "{}") {
      await basketProduct.getBasketProductsWithAssortmentInfoByBasketID(basket._baskets.id)
    }
    setOrderProductsDinamic(basketProduct.basketProduct ? basketProduct.basketProduct : [])
  }

  async function editOrder() {
    navigate(BASKET_ROUTE)
  }

  function getStringAddress(dataOfOrder) {
    return "Улица: " + dataOfOrder.address + "; Подъезд: " + dataOfOrder.enter + "; Этаж: " + dataOfOrder.floor + "; Квартира: " + dataOfOrder.flat
  }

  async function confirmOrder(event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      await order.createOrder(user._user.id, getStringAddress(dataOfOrder), aproxSum, true)
      orderProductsDinamic.map(orderProduct => {
        orderProducts.createOrderProduct(order._order.id, orderProduct.assortmentId, orderProduct.count, orderProduct.moreOrLess)
      })
      basketProduct.deleteAllBasketProductsByBasketID(basket.basket.id)
      setOrderProductsDinamic([])
      tryGetOrder()
      return 0
    }
    setValidated(true);
  }

  const getDefaultAddress = () => {
    setDataOfOrder({ ...dataOfOrder, address: user._user.defaultAddress })
  }

  useEffect(() => {
    tryGetOrder()
    createOrderProductsFromBasketProducts()
    getDefaultAddress()
  }, [user._user.defaultAddress, basket._baskets])

  const countAproxSum = async () => {
    setAproxSum(orderProductsDinamic.reduce((aproxSum, product) => aproxSum + product.count * product.costPerOne, 0))
  }

  useEffect(() => {
    if (user._isAuth) countAproxSum();
  }, [orderProductsDinamic])

  const [isOrder, setIsOrder] = useState(false)

  async function tryGetOrder() {
    await order.getOrderByUserId(user._user.id)
    setIsOrder(order._order.length !== 0)
  }

  return (
    <div className='page_body order_page_body'>
      {
        isOrder ? 
        <OrderStages currentOrder={order._order[0]}></OrderStages> :
        <div>
          {/* <h1 className='page_title'> Текущий заказ</h1> */}
      {orderProductsDinamic.length === 0 ?
        <div className='order-empty-content'>Вы еще не сформировали свой заказ
          <NavLink className='btn-returnToBasket text-white text-decoration-none' to={BASKET_ROUTE}>В корзину</NavLink>
        </div> :
        <div className='order_page_content'>
          <div className='page_form_check_box'>
            <Form noValidate validated={validated} className='form_check_order' onSubmit={confirmOrder}>
              <h2 className='form_check_title'>Детали заказа</h2>
              <div className='form_check_order_section form_check_order_adress_section'>
                {/* <label>Адрес</label> */}
                <input required type='text' value={dataOfOrder.address ? dataOfOrder.address.slice(29) : dataOfOrder.address} onChange={e => setDataOfOrder({ ...dataOfOrder, address: e.target.value })} className='form-control form_check_order_section_input form_check_order_adress_section_input' placeholder='Выберите адрес на карте' />
              </div>
              <div className='form_check_order_section form_check_order_phone_section'>
                {/* <label>Номер</label> */}
                <input required type='tel'
                  value={dataOfOrder.tel} onChange={e => setDataOfOrder({ ...dataOfOrder, tel: e.target.value })}
                  className='form-control form_check_order_section_input form_check_order_phone_section_input'
                  placeholder='+7-(999)-999-99-99' />
              </div>
              <div className='form_check_order_section_group'>
                <div className='form_check_order_section form_check_order_door_section'>
                  {/* <label>Подъезд</label> */}
                  <input required type='text'
                    value={dataOfOrder.enter} onChange={e => setDataOfOrder({ ...dataOfOrder, enter: e.target.value })}
                    className='form-control form_check_order_section_input form_check_order_door_section_input'
                    placeholder='Подъезд' />
                </div >
                <div className='form_check_order_section form_check_order_floor_section'>
                  {/* <label>Этаж</label> */}
                  <input required type='text'
                    value={dataOfOrder.floor} onChange={e => setDataOfOrder({ ...dataOfOrder, floor: e.target.value })}
                    className='form-control form_check_order_section_input form_check_order_floor_section_input'
                    placeholder='Этаж' />
                </div>
                <div className='form_check_order_section form_check_order_flat_section'>
                  {/* <label>Квартира\офис</label> */}
                  <input required type='text'
                    value={dataOfOrder.flat} onChange={e => setDataOfOrder({ ...dataOfOrder, flat: e.target.value })}
                    className='form-control form_check_order_section_input form_check_order_flat_section_input'
                    placeholder='Кв\офис' />
                </div>
              </div>


              <div className='form_check_order_section_comment'>
                {/* <label>Комментарий</label> */}
                <input
                  required
                  className='mb-2 form-control form_check_order_section_textarea'
                  placeholder="Комментарий"
                  as="textarea"
                />
              </div>
              {/*  */}
              <button type='submit' className='order_products_accept_btn'>
              Заказать
            </button>
              {/*  */}
            </Form>
            <div className='order_products_check'>
              <div className='order_products_check_box'>
                <h2 className='order_products_check_title'>Ваш заказ</h2>

                <div className='order_products_check_list'>
                  {orderProductsDinamic.map(
                    orderProduct => <OrderProduct key={orderProduct.id} orderProduct={orderProduct} ></OrderProduct>
                  )}
                </div>
                <div className='order_products_check_btns'>
                  {/* <button onClick={() => setOrderIsOk(!orderIsOk)} className='order_products_check_submit_btn'>Все верно</button> */}
                  <button className='order_products_check_error_btn' onClick={editOrder}>Изменить заказ</button>
                </div>
              </div>

            </div>
          </div>
          <div className='order_pay_form'>
            <h2 className='order_pay_title'>Итого</h2>
            <hr className='order_pay_sep_line' />
            <div className='order_pay_content'>
              <span>Товары</span> <span className='order_pay_sum'>{aproxSum}</span>
            </div>
            <hr className='order_pay_sep_line' />
            <div className='order_pay_foter'>
              <span>К оплате</span> <span>{aproxSum}</span>
            </div>
            {/* <button type='submit' className='order_products_accept_btn'>
              Заказать
            </button> */}
          </div>
        </div>}
        </div>
      }

    </div>
  );
}

export default observer(Order);