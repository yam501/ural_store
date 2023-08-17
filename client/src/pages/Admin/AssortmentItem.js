import React, { useContext, useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import AssortmentService from '../../service/AssortmentService';
import EditModal from "./modals/EditModal";

import "./assortment.css"
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const AssortmentItem = (props) => {
  const { assortment } = useContext(Context)
  const [showModal, setShowModal] = useState(false)

  const delButton = () => {
    AssortmentService.deleteOneByName(props.assortment.name)
    assortment.getAll()
  }


  
  return (
    <Form>

      <Row className='p-2 m-1'>

        <Col className='border-1 p-2'>
          {props.assortment.name}
        </Col>

        <Col className='border-1 p-2'>
          {props.assortment.type}
        </Col>

        <Col className='border-1 p-2'>
          {props.assortment.costPerOne}
        </Col>

        <Col className='border-1 p-2'>
          <Button className='w-100' size='sm' variant="secondary" onClick={() => setShowModal(true)} >Изменить</Button>
        </Col>

        <Col className='border-1 p-2'>
          <Button className='w-100' size='sm' variant="danger" type='submit' onClick={delButton} >Удалить</Button>
        </Col>
      </Row>

      <>
      <EditModal show={showModal} onHide={() => setShowModal(false)} assortment={props.assortment} />
      </>
    </Form>
  )
  
}
// <Form.Check onChange={changeIsDel} type='checkbox'  ? true : false} />

export default observer( AssortmentItem);