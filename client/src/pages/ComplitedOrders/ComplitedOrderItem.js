import React, { useState, useEffect, useContext } from 'react';
import './historyOrder.css'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

function ComplitedOrderItem() {
    // Сюда в пропсах из HistoryOrder приходит инфа об одном конкретном ComplitedOrder
    // Извлекаем из него Id и получаем по нему всю инфу о его ComplitedOrderProducts
    // Каждый ComplitedOrderProducts отрисовываем отдельно с помощью ComplitedOrderProductItem
}

export default observer(ComplitedOrderItem)