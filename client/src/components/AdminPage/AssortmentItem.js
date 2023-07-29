import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Image, Nav, Row, Col, Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import AssortmentService from "../../service/AssortmentService";

import "./assortment.css"
import { Context } from '../..';

const AssortmentItem = (props) => {
  const {assortment} = useContext(Context)

  const delButton = () => {
    AssortmentService.deleteOneByName(props.assortment.name)


  }

  return (
    <div className='big-window'>
      <Row className='p-2 border'>
        <Col className='border-1'>
          {props.assortment.id}
        </Col>
        <Col className='border-1'>
          {props.assortment.name}
        </Col>
        <Col className='border-1'>
          {props.assortment.costPerOne}
        </Col>
        <Col className='border-1'>
          <Button className='w-100' onClick={delButton} ></Button>
        </Col>
      </Row>


    </div>
  )

}


export default observer(AssortmentItem);