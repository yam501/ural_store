import React from 'react';
import {Button, Container, Nav} from 'react-bootstrap'


import './profile.css'

const ProfileMain = () => {
    return (
        <Container className='profile-content'>
            <Nav className='profile-header mt-5'>
                Профиль
            </Nav>
            <Nav className='mt-5 mb-4'>
                <input className='profile-info' placeholder='Ваше погоняло'>
                </input>
            </Nav>
            <Nav className='mb-4'>
                <input className='profile-info' type='tel' placeholder='9991114433' maxlength="12" minlength="12" disabled >
                </input>
            </Nav>
            <Nav className='mb-5'>
                <input  className='profile-info' type='password' placeholder='Пароль'>
                </input>
            </Nav>
            <Button className='button-sendInfoProfile'>
                Сохранить
            </Button>
        </Container>
    );
};

export default ProfileMain;