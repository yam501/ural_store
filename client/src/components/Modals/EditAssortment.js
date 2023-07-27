import React, { useContext, useState } from "react";
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import AssortmentService from "../../service/AssortmentService";

function EditAssortment({ show, onHide }) {



    return (

        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Изменение ассортимента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
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

export default EditAssortment
