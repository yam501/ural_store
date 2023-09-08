import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { NavLink} from 'react-router-dom';
import { Context } from '../..';

const PasswordRecov = ({goBack, ...props}) => {
    const {user} = useContext(Context)
    const [phone, setPhone] = useState('');
      
    const handlePhoneChange = (event) => {
        const input = event.target.value;
        const regex = /^[+]?[0-9]*$/; 
      
        if (input.startsWith('+79') && regex.test(input)) {
            setPhone(input);
        }
    };
    
    

    return (
<Modal show={props.show} onHide={props.handleClose}>
    <div className='position-relative ms-auto me-3 acceptCloseBtn' id='accept' onClick={goBack} ></div>
        <Container className='mt-2 ms-2 text-center'>
           <span>Восстановление пароля</span>
        </Container>
        <Form>
            <Form.Group className="container text-center w-75 mt-2 mb-3 ">
                <Form.Label className=''>Телефон</Form.Label>
                <Form.Control
                className='rounded-4 formPhone'
                type="text"
                placeholder="+78888888888"
                value={phone}
                // maxLength={12}
                onChange={e => setPhone(e.target.value)}/>
            </Form.Group>
            <Button type="submit" className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 passwordRecovBtn'>
                 Подтвердить
           </Button>
           <div className='d-flex justify-content-around align-items-center me-auto ms-auto mb-2 formLinkBox'>
                <NavLink onClick={props.showRegistrationPage} className='me-3 text-decoration-none text-black'>Регистрация</NavLink>
                <NavLink onClick={props.showAuhtPage} className='ms-3 text-decoration-none text-black text-nowrap'>Вход</NavLink>
            </div>
        </Form>
    </Modal>
    );
};

export default PasswordRecov;