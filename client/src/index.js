import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';
import AssortmentStore from './store/AssortmentStore';
import BasketProductStore from './store/BasketProductStore';
import BasketStore from './store/BasketStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext()

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore(), 
    assortment: new AssortmentStore(),
    basket: new BasketStore(),
    basketProduct: new BasketProductStore()
  }}>
    <App />
  </Context.Provider>
);


