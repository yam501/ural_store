import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import CreateAssortment from './createAssortment/CreateAssortment';
import EditAssortment from './editAssortment/EditAssortment';
import Feedback from './feedbacks/Feedback';
import { Context } from '../..';


// Страница администратора
import "./admin.css"
import "./assortment.css"
import { observer } from 'mobx-react-lite';

function Admin() {
  const { assortment, feedback } = useContext(Context)
  const [products, setProducts] = useState([])
  const [feedbackList, setFeedbackList] = useState([])

  async function getAllProducts() {
    await assortment.getAll()
    setProducts(assortment.assortments ? assortment.assortments : [])

  }
  async function getAllFeedbacks() {
    await feedback.getAll()
    setFeedbackList(feedback.feedbacks)
}


  useEffect(() => {
    getAllProducts()
    getAllFeedbacks()
  }, [])




  return (
    <div className='container page_body'>
      <Tabs
        as={'div'}
        defaultActiveKey="EditAssortment"
        className="mb-3"
      >
        <Tab eventKey="CreateAssortment" title="Создать ассортимент">
          <CreateAssortment />
        </Tab>
        <Tab eventKey="EditAssortment" title="Редактировать ассортимент" >
          <EditAssortment products={products} onClick={getAllProducts} />
        </Tab>

        <Tab eventKey="CompliteOrders" title="Подтвердить заказ" >
        </Tab>

        <Tab eventKey="Feedbacks" title="Отзывы" >
          <Feedback feedback={feedbackList}/>
        </Tab>

      </Tabs>
    </div>








  );
}

export default observer(Admin);
