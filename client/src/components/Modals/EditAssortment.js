import React, { useContext, useState } from "react";
import { Modal, Button, Dropdown, Form, Row, Container, Col, Stack } from "react-bootstrap";
import AssortmentService from "../../service/AssortmentService";

import AssortmentList from "./AssortmentList";



function EditAssortment({ show, onHide }) {



    return (

        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Изменение ассортимента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <Stack direction="horizontal" gap={3}>
                    <Form.Control className="me-auto" placeholder="Введите название" />
                    <Dropdown>
                        <Dropdown.Toggle > type </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item key={1}>Мясо</Dropdown.Item>
                            <Dropdown.Item key={2}>Салаты</Dropdown.Item>
                            <Dropdown.Item key={3}>Овощи</Dropdown.Item>
                            <Dropdown.Item key={4}>Выпечка</Dropdown.Item>
                            <Dropdown.Item key={5}>Молочка</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="secondary">Найти</Button>
                </Stack>


                
                <AssortmentList/>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>

        // <Modal
        //     size="lg"
        //     show={show}
        //     onHide={onHide}
        //     aria-labelledby="example-modal-sizes-title-lg"
        // >
        //     <Modal.Header closeButton>
        //         <Modal.Title id="example-modal-sizes-title-lg">
        //             Large Modal
        //         </Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>...</Modal.Body>
        // </Modal>
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

export default EditAssortment
