import React, { useState, useEffect, useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import OrderProduct from './OrderProduct'
import './order.css'
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../../utils/consts';

// Страница заказа

function Order() {
  const { user } = useContext(Context)
  const { order } = useContext(Context)
  const { basket } = useContext(Context)
  const { basketProduct } = useContext(Context)
  const { orderProducts } = useContext(Context)
  const { complitedOrders } = useContext(Context)
  const { complitedOrderProducts } = useContext(Context)
  const [orderProductsDinamic, setOrderProductsDinamic] = useState([])
  const [productsToConfirm, setProductsToConfirm] = useState([])
  const [productsToEdit, setProductsToEdit] = useState([])
  const [dataOfOrder, setDataOfOrder] = useState({adress: '', enter: '', floor: '', flat: ''})
  const [orderIsOk, setOrderIsOk] = useState(false)
  const navigate = useNavigate()
  const appendProduct = (product, assortmentId, productToEdit, count) => {
    productsToConfirm.push({...product, assortmentId: assortmentId})
    productsToEdit.push({...productToEdit, count: count})
  }

  async function createOrderProducts() {
    if (JSON.stringify(user._user) !== "{}") {
      order.getOrderByUserId(user._user.id)
    }
    if (JSON.stringify(order._order) !== "{}" && order._order !== null) {
      await orderProducts.getAllOrderProductsByOrderId(order._order.id)
      setOrderProductsDinamic(orderProducts._orderProducts ? orderProducts._orderProducts : [])
    }
  }

  async function editOrder() {
    await basket.getBasketByUserID(user._user.id)
    productsToEdit.map(product => {
        if (product.available) {
            basketProduct.createBasketProduct(basket.basket.id, product.id, product.costPerOne, product.count, true)
            console.log(1)
        }
    }
    )
    orderProducts.deleteAllOrderProductsByOrderId(order._order.id)
    setOrderProductsDinamic([])
    console.log(2)
    navigate(BASKET_ROUTE)
}
  async function createComplitedOrderProduct(orderProduct, complitedOrder) {
    await complitedOrderProducts.createComplitedOrderProducts(complitedOrder.id, orderProduct.assortmentId, orderProduct.count)
  }

  async function confirmOrder() {
    // const complitedOrder = await complitedOrders.createComplitedOrder(user._user.id, user._user.defaultAddress, order._order.aproxSum,
    //   order._order.updatedAt, order._order.updatedAt)
    // productsToConfirm.map((orderProduct) => {
    //   createComplitedOrderProduct(orderProduct, complitedOrder)
    // })
    // orderProducts.deleteAllOrderProductsByOrderId(order._order.id)
    // setOrderProductsDinamic([])
    order.changeOnConfirmByOrderId(order._order.id, true)
  }

  const getDefaultAdress = () => {
    setDataOfOrder({...dataOfOrder, adress: user._user.defaultAddress})
  }

  useEffect(() => {
    createOrderProducts()
    getDefaultAdress()
  }, [order._order, user._user.defaultAddress])


  return (
    <div className='page_body order_page_body'>
      <h1 >Ваш текущий заказ</h1>
      <div className='page_form_check_box'>
        <form className='form_check_order'>
          <div className='form_check_order_section'>
            <label>Ваш адрес</label>  
            <input type='text' value={dataOfOrder.adress ? dataOfOrder.adress.slice(29) : dataOfOrder.adress} onChange={e => setDataOfOrder({...dataOfOrder, adress: e.target.value})} className='form_check_order_section_input' placeholder='Выберите адрес на карте'/>
          </div>
          <div className='form_check_order_section'>
            <label>Ваш подъезд</label>  
            <input type='text' value={dataOfOrder.enter} onChange={e => setDataOfOrder({...dataOfOrder, enter: e.target.value})} className='form_check_order_section_input' placeholder='Номер вашего подъезда'/>
          </div >
          <div className='form_check_order_section'>
            <label>Ваш этаж</label>  
            <input type='text' value={dataOfOrder.floor} onChange={e => setDataOfOrder({...dataOfOrder, floor: e.target.value})} className='form_check_order_section_input' placeholder='На каком этаже вы живете'/>
          </div>
          <div className='form_check_order_section'>
            <label>Ваша квартира</label>  
            <input type='text' value={dataOfOrder.flat} onChange={e => setDataOfOrder({...dataOfOrder, flat: e.target.value})} className='form_check_order_section_input' placeholder='Ноиер вашей квартиры'/>
          </div>
          <button onClick={confirmOrder} className='order_products_accept_btn' disabled={!orderIsOk}>
            Подтвердить заказ
          </button>
        </form>
        <div className='order_products_check'>
        {
          orderProductsDinamic.length === 0 ?
            <div>Вы еще не сформировали свой заказ *Кнопка "В корзину"*</div> :
            <div className='order_products_check_box'>
              <div>
                {orderProductsDinamic.map(
                  orderProduct => <OrderProduct key={orderProduct.id} orderProduct={orderProduct} append={appendProduct}></OrderProduct>
                )}
              </div>
              <div className='order_products_check_btns'>
              <button onClick={() => setOrderIsOk(!orderIsOk)} className='order_products_check_submit_btn'>Все верно</button>
              <button className='order_products_check_error_btn' onClick={editOrder}>Изменить заказ</button>
              </div>
            </div>
        }
        </div>
      </div>
     
    </div>
  );
}

export default observer(Order);