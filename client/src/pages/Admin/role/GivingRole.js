import React, { useContext, useMemo, useState } from "react";
import { Modal, Button, Dropdown, Form, Row, Container, Col, Stack } from "react-bootstrap";
import GivingRoleItem from './GivingRoleItem'

import { Context } from "../../..";
import { observer } from "mobx-react-lite";

//  onSelect={e => setSelectSort(e)}{selectSort}sortedFeedback.length === 0 ? onChange={e => setName(e.target.value)}{type} 
function GivingRole({ users }) {
    const [roleSearch, setRoleSeacrh] = useState('Любая роль')
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')

    const sortedUsers = useMemo(() => {
        if (roleSearch.includes('Любая роль')) {
            return users.filter(item => (item.number.includes(number) & item.name.includes(name)))
        }

        return users.filter(item => (item.number.includes(number) & item.role.includes(roleSearch) & item.name.includes(name)))
    }, [roleSearch, number, name, users])

    return (
        <div>

            <div className="d-flex p-2 justify-content-center fw-bold fs-4">
                Изменение роли пользователя
            </div>

            <Stack direction="horizontal" gap={3}>

                <Form.Control className="mt-2 textarea w-25" placeholder="Введите номер" value={number} onChange={e => setNumber(e.target.value)} />
                <Form.Control className="mt-2 textarea w-25" placeholder="Введите имя" value={name} onChange={e => setName(e.target.value)} />

                <Dropdown className="mt-2" onSelect={e => setRoleSeacrh(e)}>
                    <Dropdown.Toggle className="assortment-switch"  >{roleSearch} </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="assortment-switch-item" eventKey={'Любая роль'} >Любая роль</Dropdown.Item>
                        <Dropdown.Item className="assortment-switch-item" eventKey={'ADMIN'} >ADMIN</Dropdown.Item>
                        <Dropdown.Item className="assortment-switch-item" eventKey={'ADMIN_EDIT'} >ADMIN_EDIT</Dropdown.Item>
                        <Dropdown.Item className="assortment-switch-item" eventKey={'OPERATOR'} >Оператор</Dropdown.Item>
                        <Dropdown.Item className="assortment-switch-item" eventKey={'CASHIER'} >Кассир</Dropdown.Item>
                        <Dropdown.Item className="assortment-switch-item" eventKey={'USER'} >Пользователь</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </Stack>

            <hr />
            <Row className='p-1 m-1'>
                <Col className="assortment-edit-header">Номер пользователя</Col>
                <Col className="assortment-edit-header">Имя пользователя</Col>
                <Col className="assortment-edit-header">Наличие</Col>
                

            </Row>
            <div className="feedback-max-size-window">

                {

                    sortedUsers.map(item =>
                        <GivingRoleItem key={item.id} user={item} />
                    )
                }

            </div>
            <hr />
        </div>
    )



}
export default observer(GivingRole);

















