import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Form } from 'react-bootstrap'


import { Context } from '../..';

import './profile.css'
import PhoneInputMask from "../../InputMasks/PhoneInputMask";

const ProfileMain = () => {

    const { user } = useContext(Context)


    const [profileName, setProfileName] = useState('')
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('')


    const [save, setSave] = useState(false)

    const [disabled, setDisable] = useState(true)

    const phoneMask = new PhoneInputMask()

    const saveClick = async () => {
        if (save) {
            const numberToUser = telephone === '' ? user._user.number : telephone
            const nameToUser = profileName === '' ? user._user.name : profileName
            await user.changeNumberAndNameById(numberToUser, nameToUser, user._user.id)
        }
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
                    disabled={disabled}
                    onChange={event => setProfileName(event.target.value)}
                >
                </Form.Control>
            </Nav>
            <Nav className='mb-4'>
                <Form.Control
                    className='profile-tel profile-input input'
                    type='tel'
                    placeholder={phoneMask.formatNumberToClient(user._user.number)}
                    maxlength="16"
                    minlength="16"
                    value={phoneMask.formatNumberToClient(telephone)}
                    disabled={disabled}
                    onChange={event => setTelephone(phoneMask.formatNumberToBackend(event.target.value))}
                >
                </Form.Control>
            </Nav>
            <Nav className='mb-5'>
                <Form.Control
                    className='profile-info profile-input input'
                    type='password'
                    placeholder={user._user.password}
                    value={password}
                    disabled={disabled}
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