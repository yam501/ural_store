import React, { useContext, useState } from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import CreateAssortment from '../components/AdminPage/CreateAssortment';
import EditAssortment from '../components/AdminPage/EditAssortment'
import { Context } from '..';


// Страница администратора
import "./admin.css"
import { observer } from 'mobx-react-lite';

function Admin() {
  const { assortment } = useContext(Context)

  const [assortmentVisible, setAssortmentVisible] = useState(false)
  const [editAssortmentVisible, setEditAssortmentVisible] = useState(false)

  const showOnlyAddAssortment = () => {
    setAssortmentVisible(true)
    setEditAssortmentVisible(false)
  }

  const showOnlyEditAssortment = () => {
    setEditAssortmentVisible(true)
    setAssortmentVisible(false)
    assortment.getAll()
  }


  return (
    <div className=" border">
      <Row>
        <Col className="d-flex flex-column border justify-content-center align-items-center" sm={2} >
          <Button variant='outline-dark' className='mt-4 p-3 w-50' onClick={showOnlyAddAssortment} > Добавить ассортимент</Button>
          <Button variant='outline-dark' className='mt-4 p-3 w-50' onClick={showOnlyEditAssortment} > Изменить ассортимент </Button>



        </Col>
        <Col className="border admin-content" sm={8}>
          <CreateAssortment show={assortmentVisible ? "" : "d-none"} />
          <EditAssortment show={editAssortmentVisible ? "" : "d-none"} />

        </Col>
      </Row>
    </div>
  );
}

export default observer (Admin);