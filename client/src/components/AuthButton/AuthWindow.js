import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { NavLink, useLocation } from 'react-router-dom';


const AuthWindow = (props) => {
    const [phone, setPhone] = useState('+79');
      
    const handlePhoneChange = (event) => {
        const input = event.target.value;
        const regex = /^[+]?[0-9]*$/; 
      
        if (input.startsWith('+79') && regex.test(input)) {
            setPhone(input);
        }
    };
  
    const [login, setLogin] = useState(true)

    return (
        <Modal show={props.show} onHide={props.handleClose} className={props.reg ? 'd-none' : ''}>
        <Container className='mt-2 ms-2'>
            {login ? <span>Вход</span> : <span>Регистрация</span>}
        </Container>
        <Form>
            <Form.Group className="container formPhoneBox mt-2 mb-2">
                <Form.Label className=''>Телефон</Form.Label>
                <Form.Control
                className='rounded-4 formPhone'
                type="text"
                placeholder="+78888888888"
                value={phone}
                maxLength={12}
                onChange={handlePhoneChange}/>
            </Form.Group>
  
            <Form.Group className="container formPasswordBox mb-4" >
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" className='container rounded-4 formPassword'/>
            </Form.Group>
            <Button type='submit' className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 formAuthBtn'>
                Продолжить
           </Button>
           {login ? 
           <div className='d-flex justify-content-around align-items-center me-auto ms-auto mb-2 formLinkBox'>
           <NavLink onClick={() => setLogin(false)} className='text-decoration-none text-black'>Регистрация</NavLink>
           <NavLink className='text-decoration-none text-black'>Забыли пароль?</NavLink>
           </div> :
           <div className='d-flex justify-content-center align-items-center me-auto ms-auto mb-2 formLinkBox'>
            Уже есть аккаунт?<NavLink onClick={() => setLogin(true)} className='ms-1 text-decoration-none text-black'>Войти!</NavLink>
           </div>
           }
        </Form>
    </Modal>
    );
};

export default AuthWindow;