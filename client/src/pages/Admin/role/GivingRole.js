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
    }, [roleSearch, number, name,users])

    return (
        <div>

            <div className="d-flex p-2 justify-content-center fw-bold fs-4">
                Изменение роли пользователя
            </div>

            <Stack direction="horizontal" gap={3}>

                <Form.Control className="me-auto" placeholder="Введите номер" value={number} onChange={e => setNumber(e.target.value)} />
                <Form.Control className="me-auto" placeholder="Введите имя" value={name} onChange={e => setName(e.target.value)} />

                <Dropdown onSelect={e => setRoleSeacrh(e)}>
                    <Dropdown.Toggle  >{roleSearch} </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={'Любая роль'} >Любая роль</Dropdown.Item>
                        <Dropdown.Item eventKey={'ADMIN'} >ADMIN</Dropdown.Item>
                        <Dropdown.Item eventKey={'ADMIN_EDIT'} >ADMIN_EDIT</Dropdown.Item>
                        <Dropdown.Item eventKey={'USER'} >USER</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Stack>

            <hr />
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

















