import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import CreateAssortment from './createAssortment/CreateAssortment';
import EditAssortment from './editAssortment/EditAssortment';
import Feedback from './feedbacks/Feedback';
import GivingRole from './role/GivingRole';

import { Context } from '../..';


// Страница администратора
import "./admin.css"
import "./assortment.css"
import { observer } from 'mobx-react-lite';

function Admin() {
  const { assortment, feedback, use } = useContext(Context)
  const [products, setProducts] = useState([])
  const [feedbackList, setFeedbackList] = useState([])
  const [usersList, setUsersList] = useState([])

  async function getAllProducts() {
    await assortment.getAll()
    setProducts(assortment.assortments ? assortment.assortments : [])

  }

  async function getAllFeedbacks() {
    await feedback.getAll()
    setFeedbackList(feedback.feedbacks ? feedback.feedbacks : [])
  }

  async function getAllUsers(){
    await use.getAll()
    setUsersList(use.users)
  }

  useEffect(() => {
    getAllProducts();
    getAllFeedbacks();
    getAllUsers();
  }, [])




  return (
    <div className='container page_body'>
      <Tabs
        as={'div'}
        defaultActiveKey="Giverole"
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
          <Feedback feedback={feedbackList} />
        </Tab>

        <Tab eventKey="Giverole" title="Выдать роли" >
          <GivingRole users={usersList} onClick={getAllProducts}/>
        </Tab>

      </Tabs>
    </div>








  );
}

export default observer(Admin);
