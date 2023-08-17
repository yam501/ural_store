import React, { useContext, useState } from 'react';
import {Button, Container, Nav, Form} from 'react-bootstrap'


import { Context } from '../..';

import './profile.css'

const ProfileMain = () => {

    const {user} = useContext(Context)


    const [profileName, setProfileName] = useState()
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('')


    const [save, setSave] = useState(false)

    const [disabled, setDisable] = useState(true)


    const saveClick = () => {
        setDisable(!disabled)
        setSave(!save)
    }
    return (
        
        <Container className='profile-content'>
            <Nav className='profile-header'>
                Профиль
            </Nav>
            <Nav className='mt-5 mb-4'>
                <Form.Control 
                className='profile-info profile-input input' 
                type='text' 
                placeholder={user._user.name ? user._user.name : "Ваше погоняло"}
                value={profileName}
                disabled = {disabled}
                onChange={event => setProfileName(event.target.value)}
                >
                </Form.Control>
            </Nav>
            <Nav className='mb-4'>
                <Form.Control 
                className='profile-tel profile-input input' 
                type='tel' 
                placeholder={user._user.number}
                maxlength="12" 
                minlength="12" 
                value={telephone}
                disabled = {disabled}
                onChange={event => setTelephone(event.target.value)}
                >
                </Form.Control>
            </Nav>
            <Nav className='mb-5'>
                <Form.Control  
                className='profile-info profile-input input' 
                type='password' 
                placeholder={user._user.password}
                value={password}
                disabled = {disabled}
                onChange={event => setPassword(event.target.value)}
                >
                </Form.Control>
            </Nav>
            <Button 
            variant="outline-danger"
            className='button-sendInfoProfile'
            onClick={() => saveClick()}
            >
                {save ? 'Сохранить' : 'Редактировать'}
            </Button>
        </Container>
    );
};

export default ProfileMain;