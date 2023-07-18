import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import {registration} from "../../http/userAPI";
import { ORDER_ROUTE, STORE_ROUTE } from '../../utils/consts';
import Accept from './Accept';
import PasswordRecov from '../PasswordRecov';

const AuthWindow = (props) => {
    const [phone, setPhone] = useState('+79');
      
    const handlePhoneChange = (event) => {
        const input = event.target.value;
        const regex = /^[+]?[0-9]*$/; 
      
        if (input.startsWith('+79') && regex.test(input)) {
            setPhone(input);
        }
    };
    const [accept, setAccept] = useState(true)
    const [isLogin, setIsLogin] = useState(true)

    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
 
    const signIn = async() => { 

        if(isLogin){
            // const response = await login()

        } else{
            const response = await registration(number,password)
            
            setAccept(!accept)
            console.log(response)
        }
   
    } 

    return (
        <Modal show={props.show} onHide={props.handleClose} className={accept ? '' : 'd-none'}>
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
                onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Button onClick={signIn} className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 formAuthBtn'>
                Продолжить
           </Button>
           {isLogin ? 
           <div className='d-flex justify-content-around align-items-center me-auto ms-auto mb-2 formLinkBox'>
           <NavLink onClick={() => setIsLogin(false)} className='me-3 text-decoration-none text-black'>Регистрация</NavLink>
           <NavLink className='ms-3 text-decoration-none text-black text-nowrap'>Забыли пароль?</NavLink>
           </div> :
           <div className='d-flex justify-content-center align-items-center text-nowrap me-auto ms-auto mb-2 formLinkBox'>
            Уже есть аккаунт?<NavLink onClick={() => setIsLogin(true)} className='ms-1 text-decoration-none text-black'>Войти!</NavLink>
           </div>
           }
        </Form>
        <Accept show={props.show} handleClose={props.handleClose} accept={accept} number={number}/>
        {/* <PasswordRecov show={props.show} handleClose={props.handleClose}/>  */}
    </Modal>
    );
};

export default AuthWindow;