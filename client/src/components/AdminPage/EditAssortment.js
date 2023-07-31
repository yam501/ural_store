import React, { useContext, useState } from "react";
import { Modal, Button, Dropdown, Form, Row, Container, Col, Stack } from "react-bootstrap";
import AssortmentService from "../../service/AssortmentService";

import AssortmentList from "./AssortmentList";

import "./assortment.css"
import { Context } from "../..";
import { observer } from "mobx-react-lite";


function EditAssortment(props) {
    const { assortment } = useContext(Context)

    const [type, setType] = useState('Выберите тип')
    const [name, setName] = useState('')

    const search = () => {
        if (name !== '' && type !== 'Любой тип') return assortment.getAllByTypeAndName(type, name)
        if (name === '' && type !== 'Любой тип') return assortment.getByType(type)
        if (name !== '' && type === 'Любой тип') return assortment.getByName(name)
        return assortment.getAll()
    }
    assortment.getAll()
    const delAssortment = () => {
        assortment._assortments.forEach(e => {
            if (e.isDel) AssortmentService.deleteOneByName(e.name)
        });
        assortment.getAll()
    }


    return (

        <div className={`${props.show}`}>



            <div className="d-flex p-2 justify-content-center fw-bold fs-4">
                Изменение ассортимента
            </div>

            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Введите название" onChange={e => setName(e.target.value)} />
                <Dropdown>
                    <Dropdown.Toggle > {type} </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item key={1} onClick={() => setType('Любой тип')}>Любой тип</Dropdown.Item>
                        <Dropdown.Item key={2} onClick={() => setType('Мясо')}>Мясо</Dropdown.Item>
                        <Dropdown.Item key={3} onClick={() => setType('Салаты')}>Салаты</Dropdown.Item>
                        <Dropdown.Item key={4} onClick={() => setType('Овощи')}>Овощи</Dropdown.Item>
                        <Dropdown.Item key={5} onClick={() => setType('Выпечка')}>Выпечка</Dropdown.Item>
                        <Dropdown.Item key={6} onClick={() => setType('Молочка')}>Молочка</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button variant="secondary" onClick={search}>Найти</Button>
                <Button variant="danger" onClick={delAssortment}>Удалить</Button>
            </Stack>



            <AssortmentList />


        </div>

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

export default observer(EditAssortment);
