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

// Страница заказа

function Order() {
  const { user } = useContext(Context)
  const { order } = useContext(Context)
  const { basket } = useContext(Context)
  const { basketProduct } = useContext(Context)
  const { orderProducts } = useContext(Context)
  const [orderProductsDinamic, setOrderProductsDinamic] = useState([])
  const [productsToConfirm, setProductsToConfirm] = useState([])
  const [dataOfOrder, setDataOfOrder] = useState({ adress: '', enter: '', floor: '', flat: '', tel: '' })
  const [orderIsOk, setOrderIsOk] = useState(false)
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false);
  const [orderSend, setOrderSend] = useState(false);
  const [aproxSum, setAproxSum] = useState(0);
  const appendProduct = (product, assortmentId) => {
    productsToConfirm.push({ ...product, assortmentId: assortmentId })
  }

  async function createOrderProductsFromBasketProducts() {
    if (JSON.stringify(user._user) !== "{}") {
      await order.getNotOnConfirmOrderByUserId(user._user.id)
    }
    if (JSON.stringify(order._order) !== "{}" && order._order !== null) {
      setOrderProductsDinamic(basketProduct._basketProducts ? basketProduct._basketProducts : [])
    }
  }

  async function editOrder() {
    navigate(BASKET_ROUTE)
  }

  async function confirmOrder(event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {


      await order.changeOrderProductsCountByOrderId(order._order.id, orderProductsDinamic.length)
      productsToConfirm.map(orderProduct => {
        orderProducts.createOrderProduct(order._order.id, orderProduct.assortmentId, orderProduct.count, orderProduct.moreOrLess)
      })
      order.changeOnConfirmByOrderId(order._order.id, true)
      basketProduct.deleteAllBasketProductsByBasketID(basket.basket.id)
      setOrderProductsDinamic([])

      setOrderIsOk(false)
      return 0
    }


    setValidated(true);


  }

  const getDefaultAdress = () => {
    setDataOfOrder({ ...dataOfOrder, adress: user._user.defaultAddress })
  }

  useEffect(() => {
    createOrderProductsFromBasketProducts()
    getDefaultAdress()
  }, [user._user.defaultAddress])
  
  const countAproxSum = async () => {
    setAproxSum(orderProductsDinamic.reduce((aproxSum, product) => aproxSum + product.count * product.costPerOne, 0))
  }

  useEffect(() => {
    if (user._isAuth) countAproxSum();
  }, [orderProductsDinamic])

  return (
    <div className='page_body order_page_body'>
      <h1 className='page_title'> Текущий заказ</h1>
      <div className='order_page_content'>
        <div className='page_form_check_box'>
          <Form noValidate validated={validated} className='form_check_order' onSubmit={confirmOrder}>
            <h2 className='form_check_title'>Детали заказа</h2>
            <div className='form_check_order_section form_check_order_adress_section'>
              {/* <label>Адрес</label> */}
              <input required type='text' value={dataOfOrder.adress ? dataOfOrder.adress.slice(29) : dataOfOrder.adress} onChange={e => setDataOfOrder({ ...dataOfOrder, adress: e.target.value })} className='form-control form_check_order_section_input form_check_order_adress_section_input' placeholder='Выберите адрес на карте' />
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
          </Form>
          <div className='order_products_check'>
            {
              orderProductsDinamic.length === 0 ?
                <div className='order-empty-content'>Вы еще не сформировали свой заказ
                  <NavLink className='btn-returnToBasket text-white text-decoration-none' to={BASKET_ROUTE}>В корзину</NavLink>
                </div> :
                <div className='order_products_check_box'>
                  <h2>Ваш заказ</h2>

                  <div className='order_products_check_list'>
                    {orderProductsDinamic.map(
                      orderProduct => <OrderProduct key={orderProduct.id} orderProduct={orderProduct} append={appendProduct}></OrderProduct>
                    )}
                  </div>
                  <div className='order_products_check_btns'>
                    {/* <button onClick={() => setOrderIsOk(!orderIsOk)} className='order_products_check_submit_btn'>Все верно</button> */}
                    <button className='order_products_check_error_btn' onClick={editOrder}>Изменить заказ</button>
                  </div>
                </div>
            }
          </div>
        </div>
        <div className='order_pay_form'>
          <h2 className='order_pay_title'>Итого</h2>
          <hr className='order_pay_sep_line'/>
          <div className='order_pay_content'>
            <span>Товары</span> <span className='order_pay_sum'>{aproxSum}</span>
          </div>
          <hr className='order_pay_sep_line'/>
          <div className='order_pay_foter'>
            <span>К оплате</span> <span>{aproxSum}</span>
          </div>
          <button type='submit' className='order_products_accept_btn'>
            Заказать
          </button>
        </div>
      </div>

    </div>
  );
}

export default observer(Order);