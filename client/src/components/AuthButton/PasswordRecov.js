 import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { NavLink} from 'react-router-dom';
import { Context } from '../..';
import BackArrow from './BackArrow';
import Accept from './Accept';

const PasswordRecov = ({goBack, ...props}) => {
    const {user} = useContext(Context)
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [check, setCheck] = useState('number');
    const handlePhoneChange = (event) => {
        const input = event.target.value;
        const regex = /^[+]?[0-9]*$/; 
      
        if (input.startsWith('+79') && regex.test(input)) {
            setPhone(input);
        }
    };
    
    const changePasswordByNumber = () => {
        user.changePasswordByNumber(phone, newPassword);
        goBack();
    }
    const cheackCode = () => {
        user.checkCodeForRecovPassword(phone, code).then(res => {
            if (res) setCheck('')
        })
    }
    const changeIsActivatedByNumber = () => {
        user.sendCode(phone)
        console.log(phone)
        setCheck('code')
    }
    return (
    <Modal show={props.show} onHide={props.handleClose}>
    {/* <div className='position-relative ms-auto me-3 acceptCloseBtn' id='accept' onClick={goBack}></div> */}
    
        <div className='mt-2 password_recov_title_box'>
            <BackArrow onClick={() => check === 'code' ? setCheck('number') : goBack()}/>
           <span className='password_recov_title'>Восстановление пароля</span>
        </div>

        {check === 'number' ? <Form>
            <Form.Group className={`container text-center w-75 mt-2 mb-3`}>
                <Form.Label className=''>Телефон</Form.Label>
                <Form.Control
                className='rounded-4 formPhone'
                type="text"
                placeholder="+78888888888"
                value={phone}
                // maxLength={12}
                onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            <Button onClick={changeIsActivatedByNumber} className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 passwordRecovBtn'>
                 Подтвердить
           </Button>
           {/* <div className='d-flex justify-content-around align-items-center me-auto ms-auto mb-2 formLinkBox'>
                <NavLink onClick={props.showRegistrationPage} className='me-3 text-decoration-none text-black'>Регистрация</NavLink>
                <NavLink onClick={props.showAuhtPage} className='ms-3 text-decoration-none text-black text-nowrap'>Вход</NavLink>
            </div> */}
        </Form>
        :
         check === 'code' ?<Form>
                <Form.Group className={`container text-center w-75 mt-2 mb-3`} >
                    <Form.Label className=''>Код</Form.Label>
                    <Form.Control
                    className='rounded-4 formPhone'
                    type="text"
                    placeholder=""
                    value={code}
                    // maxLength={12}
                    onChange={e => setCode(e.target.value)}/>
                </Form.Group>
                <Button onClick={cheackCode} className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 passwordRecovBtn'>
                    Подтвердить
                </Button>
            </Form>
            :
            <Form>
                <Form.Group className="container text-center w-75 mt-2 mb-3 ">
                    <Form.Label className=''>Новый пароль</Form.Label>
                    <Form.Control
                    className='rounded-4 formPhone'
                    type="password"
                    value={newPassword}
                    // maxLength={12}
                    onChange={e => setNewPassword(e.target.value)}/>
                </Form.Group>
                <Button onClick={changePasswordByNumber} className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 passwordRecovBtn'>
                    Изменить пароль
                </Button>
            </Form>}
    </Modal>
    );
};

export default PasswordRecov;