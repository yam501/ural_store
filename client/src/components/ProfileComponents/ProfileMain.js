import React, { useState } from 'react';
import {Button, Container, Nav, Form} from 'react-bootstrap'


import './profile.css'

const ProfileMain = () => {
    const [profileName, setProfileName] = useState('')
    const [tel, setTel] = useState('')
    const [password, setPassword] = useState('')
    const [save, setSave] = useState(false)



    const saveClick = () => {
        setSave(!save)
    }
    return (
        
        <Container className='profile-content'>
            <Nav className='profile-header'>
                Профиль
            </Nav>
            <Nav className='mt-5 mb-4'>
                <Form.Control 
                className='profile-info input' 
                type='text' 
                placeholder='Ваше погоняло'
                value={profileName}
                onChange={e => setProfileName(e.target.profileName)}
                >
                </Form.Control>
            </Nav>
            <Nav className='mb-4'>
                <Form.Control 
                className='profile-tel input' 
                type='tel' 
                placeholder='9991114433' 
                maxlength="12" 
                minlength="12" 
                value={tel}
                onChange={e => setTel(e.target.tel)}
                >
                </Form.Control>
            </Nav>
            <Nav className='mb-5'>
                <Form.Control  
                className='profile-info input' 
                type='password' 
                placeholder='Пароль'
                value={password}
                onChange={e => setPassword(e.target.password)}
                >
                </Form.Control>
            </Nav>
            <Button 
            variant="outline-danger"
            className='button-sendInfoProfile'
            onClick={() => saveClick()}
            >
                {save ? 'Редактировать' : 'Сохранить'}
            </Button>
        </Container>
    );
};

export default ProfileMain;