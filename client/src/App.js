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
  const { basketProduct } = useContext(Context)
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
      // setLoading(false)
    }
  }, [])
  product.getAllByAvailable(true)
  
  // basket.getBasketByUserID(user._user.id)

  // if (loading) {
  //   return <Spinner animation={"grow"} />
  // }
  
  return (
    <BrowserRouter>
      <NavBar />
      {/* <GPS/> */}
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
