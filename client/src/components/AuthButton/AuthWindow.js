import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { NavLink, Navigate, Route, useLocation, useNavigate } from 'react-router-dom';
import { registration } from "../../http/userAPI";
import { ORDER_ROUTE, STORE_ROUTE } from '../../utils/consts';
import Accept from './Accept';
import PasswordRecov from '../PasswordRecov';
import { Context } from '../..';
import { Row } from 'react-bootstrap';

const AuthWindow = (props) => {
    const [phone, setPhone] = useState('+79');

    const handlePhoneChange = (event) => {
        const input = event.target.value;
        const regex = /^[+]?[0-9]*$/;

        if (input.startsWith('+79') && regex.test(input)) {
            setPhone(input);
        }
    };

    const [isLogin, setIsLogin] = useState(true)
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const { user } = useContext(Context)
    const location = useLocation()

    const registration = () => {
        user.registration(number, password);
        props.updateNum(number, !isLogin)

    }
    const login = () => {
        user.login(number, password);
        props.updateNum('', !isLogin)
    }



    return (
        <Modal show={props.show} onHide={props.handleClose} >
            <Container className='mt-2 ms-2'>
                {isLogin ? <span>Вход</span> : <span>Регистрация</span>}
            </Container>
            <Form>
                <Form.Group className="container formPhoneBox mt-2 mb-2">
                    <Form.Label className=''>Телефон</Form.Label>
                    <Form.Control
                        className='rounded-4 formPhone'
                        type="text"
                        placeholder="+78888888888"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="container formPasswordBox mb-4" >
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        className='container rounded-4 formPassword'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                {isLogin ?
                    <div >
                        <Button onClick={() => login()}  className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 formAuthBtn'>
                            Продолжить
                        </Button>
                        <div className='d-flex justify-content-around align-items-center me-auto ms-auto mb-2 formLinkBox'>
                            <NavLink onClick={() => setIsLogin(false)} className='me-3 text-decoration-none text-black'>Регистрация</NavLink>
                            <NavLink className='ms-3 text-decoration-none text-black text-nowrap'>Забыли пароль?</NavLink>
                        </div>
                    </div> :
                    <div >
                        <Button onClick={() => registration()} className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 formAuthBtn'>
                            Продолжить
                        </Button>
                        <div className='d-flex justify-content-center align-items-center text-nowrap me-auto ms-auto mb-2 formLinkBox'>
                            Уже есть аккаунт?<NavLink onClick={() => setIsLogin(true)} className='ms-1 text-decoration-none text-black'>Войти!</NavLink>
                        </div>
                    </div>
                }
            </Form>
            {/* <PasswordRecov show={props.show} handleClose={props.handleClose}/>  */}
        </Modal>
    );
};

export default AuthWindow;