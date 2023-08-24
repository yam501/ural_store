import React, { useContext, useMemo, useState } from "react";
import { Modal, Button, Dropdown, Form, Row, Container, Col, Stack } from "react-bootstrap";

import AssortmentItem from "./AssortmentItem";


import "../assortment.css"
import { Context } from "../../..";
import { observer } from "mobx-react-lite";


function EditAssortment({ products, onClick }) {


    const [type, setType] = useState('Любой тип')
    const [name, setName] = useState('')
    

    const searchedProducts = useMemo(() =>{
        if (type === 'Любой тип') return products.filter(item => item.name.toLowerCase().includes(name))
        return products.filter(item => item.name.includes(name) & item.type.includes(type))
    },
    [products, name, type]

    )
// products
// products.filter(item => item.name.includes(name))

    return (

        <div>


            <div className="d-flex p-2 justify-content-center fw-bold fs-4">
                Изменение ассортимента
            </div>

            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Введите название" value={name} onChange={e => setName(e.target.value)} />

                <Dropdown onSelect={e => setType(e)}>
                    <Dropdown.Toggle > {type} </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={'Любой тип'} >Любой тип</Dropdown.Item>
                        <Dropdown.Item eventKey={'Мясо'} >Мясо</Dropdown.Item>
                        <Dropdown.Item eventKey={'Салаты'} >Салаты</Dropdown.Item>
                        <Dropdown.Item eventKey={'Овощи'} >Овощи</Dropdown.Item>
                        <Dropdown.Item eventKey={'Выпечка'} >Выпечка</Dropdown.Item>
                        <Dropdown.Item eventKey={'Молочка'} >Молочка</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Stack>


            <div className="max-size-window border-1 m-2 w-100">
                {
                    searchedProducts.map(item =>

                        <AssortmentItem key={item.name} assortment={item} onClick={onClick}/>
                    )
                }

            </div>


        </div>


    );
}


export default observer(EditAssortment);
