import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import CreateAssortment from './createAssortment/CreateAssortment';
import EditAssortment from './editAssortment/EditAssortment';
import Feedback from './feedbacks/Feedback';
import GivingRole from './role/GivingRole';
import ChangeAvailable from './changeAvailable/ChangeAvailable';

import { Context } from '../..';


// Страница администратора
import "./admin.css"
import "./assortment.css"
import { observer } from 'mobx-react-lite';
import ConfirmOrders from './confirmOrders/ConfirmOrders';

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

  async function getAllUsers() {
    try {
      await use.getAll()
      setUsersList(use.users) // ПОФИКСИТЬ КОГДА РОЛИ НЕ ПОДХОДЯТ ВЫЛАЗИТ ОШИБКА ПОСТ ЗАПРОСА УБРАТЬ ИЗ КОНСОЛИ

    } catch (error) {

    }
  }

  useEffect(() => {

    getAllProducts();
    getAllFeedbacks();
    getAllUsers();


  }, [])




  return (
    <div className='container page_body admin-page mt-3 mb-3'>
      <Tabs
        as={'div'}
        defaultActiveKey="CreateAssortment"
        className="mb-3"
      >
        <Tab eventKey="CreateAssortment" title="Создать ассортимент">
          <CreateAssortment />
        </Tab>


        <Tab eventKey="EditAssortment" title="Редактировать ассортимент" >
          <EditAssortment products={products} onClick={getAllProducts} />
        </Tab>

        {
          0 === 1 ?
            <Tab eventKey="ConfirmOrders" title="Подтвердить заказ" >
              <ConfirmOrders></ConfirmOrders>
            </Tab>
            :
            <div>dfdf</div>
        }


        <Tab eventKey="Feedbacks" title="Отзывы" >
          <Feedback feedback={feedbackList} />
        </Tab>

        <Tab eventKey="Giverole" title="Выдать роли" >
          <GivingRole users={usersList} onClick={getAllUsers} />
        </Tab>

        <Tab eventKey="ChangeAvailable" title="Изменить наличия" >
          <ChangeAvailable products={products} onClick={getAllProducts} />
        </Tab>

      </Tabs>
    </div>








  );
}

export default observer(Admin);
