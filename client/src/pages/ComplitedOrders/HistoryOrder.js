import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import OurDateTime from '../../dateTime/dateTime';
import ComplitedOrderItem from './ComplitedOrderItem';

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
    <div className="HistoryOrder">
      <header className="HistoryOrder-header">
        <h1 className='history-title'>История заказов</h1>
      </header>
      <div className="complitedOrders">
        {complitedOrdersDinamic.map(complitedOrder =>
          <ComplitedOrderItem key={complitedOrder.id} user={user} complitedOrder={complitedOrder}/>
        )}
      </div>
    </div>
  );
}

export default observer(HistoryOrder);