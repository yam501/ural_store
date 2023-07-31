import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Image, Nav, Row, Col, Container, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import AssortmentService from "../../service/AssortmentService";

import "./assortment.css"
import { Context } from '../..';

const AssortmentItem = (props) => {
  const {assortment} = useContext(Context)

  // const delButton = () => {
  //   AssortmentService.deleteOneByName(props.assortment.name)
  // }

  const changeIsDel = () =>{
    if (props.assortment.isDel) return props.assortment.isDel = false
    return props.assortment.isDel = true
  }

  return (
    <div className='big-window'>
      <Row className='p-2 border'>
        <Col className='border-1'>
          {props.assortment.name}
        </Col>
        <Col className='border-1'>
          {props.assortment.type}
        </Col>
        <Col className='border-1'>
          {props.assortment.costPerOne}
        </Col>




        <Col className='border-1'>
            <Form.Check onChange={changeIsDel}  label="Удалить?"/>
        </Col>
        <Col className='border-1'>
          <Button className='w-100' size='sm' onClick={()=>console.log(props.assortment.isDel)} >Изменить</Button>
            
        </Col>
      </Row>


    </div>
  )

}


export default observer(AssortmentItem);