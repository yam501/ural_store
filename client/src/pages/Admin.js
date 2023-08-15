import React, { useContext, useState } from 'react';
import { Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import CreateAssortment from '../components/AdminPage/CreateAssortment';
import EditAssortment from '../components/AdminPage/EditAssortment'
import { Context } from '..';


// Страница администратора
import "./admin.css"
import "../components/AdminPage/assortment.css"
import { observer } from 'mobx-react-lite';

function Admin() {
  const { assortment } = useContext(Context)

  const getAllAssortment = () => {
    assortment.getAll()
  }


  return (
    <div className='w-75 container'>
      <Tabs
        as={'div'}
        defaultActiveKey="profile"
        className="mb-3"
      >
        <Tab eventKey="CreateAssortment" title="Создать ассортимент">
          <CreateAssortment />
        </Tab>
        <Tab eventKey="EditAssortment" title="Редактировать ассортимент" onSelect={getAllAssortment()}>
          <EditAssortment />
        </Tab>
      </Tabs>
    </div>








  );
}

export default observer(Admin);

  // <div className=" border">
    //   <Row>
    //     <Col className="d-flex flex-column border justify-content-center align-items-center" sm={2} >
    //       <Button variant='outline-dark' className='mt-4 p-3 w-50' onClick={showOnlyAddAssortment} > Добавить ассортимент</Button>
    //       <Button variant='outline-dark' className='mt-4 p-3 w-50' onClick={showOnlyEditAssortment} > Изменить ассортимент </Button>



    //     </Col>
    //     <Col className=" border" sm={8} >
    //       <CreateAssortment show={assortmentVisible ? "" : "d-none"} />
    //       <EditAssortment show={editAssortmentVisible ? "" : "d-none"} />

    //     </Col>
    //   </Row>
    // </div>