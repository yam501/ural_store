import React, { useContext, useState } from "react";
import { Modal, Button, Dropdown, Form, Row, Container, Col, Stack } from "react-bootstrap";
import AssortmentService from "../../service/AssortmentService";

import AssortmentList from "./AssortmentList";


import "./assortment.css"
import { Context } from "../..";
import { observer } from "mobx-react-lite";


function EditAssortment() {
    const { assortment } = useContext(Context)

    const [type, setType] = useState('Любой тип')
    const [name, setName] = useState('')


    const search = () => {
        if (name !== '' && type !== 'Любой тип') return assortment.getByTypeAndName(type, name)
        if (name === '' && type !== 'Любой тип') return assortment.getByType(type)
        if (name !== '' && type === 'Любой тип') return assortment.getByName(name)
        return assortment.getAll()
    }

    const delAssortment = () => {
        assortment._assortments.forEach(i => {
            if (i.isDel) AssortmentService.deleteOneByName(i.name)
        });
        assortment.getAll()
    }
    



    return (

        <div>




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
                <Button variant="secondary" onClick={search} type="submit">Найти</Button>
            </Stack>


            <div className="max-size-window border-1 m-2">
                <AssortmentList />
            </div>


        </div>


    );
}


export default observer(EditAssortment);
