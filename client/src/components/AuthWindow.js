import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


const AuthWindow = () => {
    const [phone, setPhone] = useState('+79');
      
    const handlePhoneChange = (event) => {
        const input = event.target.value;
        const regex = /^[+]?[0-9]*$/; // Регулярное выражение для проверки только цифр
      
        if (input.startsWith('+79') && regex.test(input)) {
            setPhone(input);
        }
    };

    return (
        <div className='s'>
        <Container className='d-flex align-items-center'>
            <span>Вход</span>
            <div className='closeBtn'></div>
        </Container>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Телефон</Form.Label>
                <Form.Control
                type="text"
                placeholder="+78888888888"
                value={phone}
                maxLength={12}
                onChange={handlePhoneChange}/>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
           </Button>
        </Form>
    </div>
    );
};

export default AuthWindow;