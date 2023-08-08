import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CaruselHead from "./components/StoreComponents/CaruselHead";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import Accept from "./components/AuthButton/Accept";
import PasswordRecov from "./components/PasswordRecov";
import ProductStore from "./store/ProductStore";

const App = observer(() => {
  const { user } = useContext(Context)
  const { product } = useContext(Context)
  const {basket} = useContext(Context)
  const {basketProduct} = useContext(Context)
  
  const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   check().then(data => {
  //     user.setUser(true)
  //     user.setIsAuth(true)
  //   }).finally(() => setLoading(false))
  // }, [])
  useEffect(() => {
    if (localStorage.getItem('token')) {
      
      user.checkAuth()
    }
  }, [])
  product.getAllByAvailable(true)
  // basket.getBasketByUserID(user._user.id)

  return (
    <BrowserRouter >
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
