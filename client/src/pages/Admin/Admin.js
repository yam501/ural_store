import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import CreateAssortment from './CreateAssortment';
import EditAssortment from './EditAssortment'
import { Context } from '../..';


// Страница администратора
import "./admin.css"
import "./assortment.css"
import { observer } from 'mobx-react-lite';

function Admin() {
  const { assortment } = useContext(Context)
  const [products, setProducts] = useState([])


  async function getAllProducts() {
    console.log('asda')
    await assortment.getAll()
    setProducts(assortment.assortments ? assortment.assortments : [])

  }


  useEffect(() => {
    getAllProducts()
  }, [])




  return (
    <div className='w-75 container'>
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
      </Tabs>
    </div>








  );
}

export default observer(Admin);
