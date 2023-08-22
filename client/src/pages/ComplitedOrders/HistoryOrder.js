import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import OurDateTime from '../../dateTime/dateTime';
import ComplitedOrderItem from './ComplitedOrderItem';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { STORE_ROUTE } from '../../utils/consts';

// Страница истории заказов

function HistoryOrder() {
  const { complitedOrders } = useContext(Context)
  const { user } = useContext(Context)
  const [complitedOrdersDinamic, setComplitedOrdersDinamic] = useState([])

  async function fetchComplitedOrders() {
    await complitedOrders.getAllComplitedOrdersByUserId(user._user.id)
    setComplitedOrdersDinamic(complitedOrders._complitedOrders ? complitedOrders._complitedOrders : [])
  }

  useEffect(() => {
    fetchComplitedOrders()
  }, [])

  return (
    <Container className='page_body'>
      {complitedOrdersDinamic.length === 0 ?
        <Container className='d-flex justify-content-center align-items-center history-empty'>
          <div className='history-empty-text'>Ваша история пока не написана</div>
          <div className='history-empty-content'>

            <NavLink className='btn-returnToStore text-white text-decoration-none' to={STORE_ROUTE}>К отделам</NavLink>
            <div className='history-icon'> </div>
          </div>
        </Container>
        :
        <Container className="complitedOrders">
          {complitedOrdersDinamic.map(complitedOrder =>
            <ComplitedOrderItem key={complitedOrder.id} user={user} complitedOrder={complitedOrder} />
          )}
        </Container>
      }
    </Container>
  );
}

export default observer(HistoryOrder);