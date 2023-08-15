import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

// Страница истории заказов

function HistoryOrder() {
  const { complitedOrders } = useContext(Context)
  const { user } = useContext(Context)
  const [complitedOrdersDinamic, setComplitedOrdersDinamic] = useState([])

  async function fetchComplitedOrders() {
    // setTimeout(async () => {
    //   await complitedOrders.getAllComplitedOrdersByUserId(user._user.id)
    //   setComplitedOrdersDinamic(complitedOrders._complitedOrders)
    // }, 5000)
    await complitedOrders.getAllComplitedOrdersByUserId(user._user.id)
    setComplitedOrdersDinamic(complitedOrders._complitedOrders)
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
        {complitedOrdersDinamic.map(complitedOrder => <div>{complitedOrder.address}</div>)}
      </div>
    </div>
  );
}

export default observer(HistoryOrder);