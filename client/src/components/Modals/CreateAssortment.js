import React, { useContext, useState } from "react";
import {Modal, Button, Dropdown, Form} from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";



function CreateAssortment ({show, onHide}){
    const[name, setName] = useState('Выберите тип') 
    const[available, setAvailable] = useState('Есть/Нет') 


    return (

<Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавление ассортимента
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown>
                <Dropdown.Toggle >{name} </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> setName('Мясо')} key={1}>Мясо</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setName('Салаты')} key={2}>Салаты</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setName('Овощи')} key={3}>Овощи</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setName('Выпечка')} key={4}>Выпечка</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setName('Молочка')} key={5}>Молочка</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Form.Control className="mt-3" placeholder="Введите название"/>

            <Dropdown>
                <Dropdown.Toggle className="mt-3" >{available} </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> setAvailable('Есть')} key={1}>Есть</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setAvailable('Нет')} key={2}>Нет</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Form.Control className="mt-3" placeholder="Введите цену за штуку(кг)" type="number"/>

            <Form.Control className="mt-3" placeholder="Описание"/>

            <Form.Control className="mt-3" placeholder="Состав"/>

            <Form.Control className="mt-3" placeholder="Фото" type="file"/>

        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={onHide}>Закрыть</Button>
      <Button onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    );
}
/*
Тип          String       notNull
Название     String       notNull
Есть/нет     Bool         notNull
Ценазаштуку  Double       notNull
Описание     String       NUll
Состав       String       NULL
image        String(FILE) NULL

*/

export default CreateAssortment