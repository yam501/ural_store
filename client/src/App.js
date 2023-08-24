import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { Spinner } from "react-bootstrap";
import GPS from "./components/YndexMaps/GPS";

const App = observer(() => {
  const { user } = useContext(Context)
  const { product } = useContext(Context)
  const { basket } = useContext(Context)
  const { order } = useContext(Context)
  const { basketProduct } = useContext(Context)

  const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   check().then(data => {
  //     user.setUser(true)
  //     user.setIsAuth(true)
  //   }).finally(() => setLoading(false))
  // }, [])

  async function loadToContext() {
    await user.checkAuth()
    if (user._user.isActivated) {
      basket.getBasketByUserID(user._user.id)
      order.getOrderByUserId(user._user.id)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      loadToContext()
      // setLoading(false)
    }
  }, [user._user.id])
  product.getAllByAvailable(true)
  
  // basket.getBasketByUserID(user._user.id)

  // if (loading) {
  //   return <Spinner animation={"grow"} />
  // }
  
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
      <Footer />
    </BrowserRouter>
  );
});

export default App;
