import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { NavLink, useLocation } from 'react-router-dom';
import { checkCode } from '../../http/userAPI';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const Accept = observer((props) => { 
    const {user} = useContext(Context)
    const [time, setTime] = useState(30);
    const [code, setCode] = useState('');
    const putAccept = () => {
        user.checkCode(props.number, code);
        
    }

    return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Container className='mt-2 ms-2 text-center'>
           <span>Подтверждение номера</span>
        </Container>
        <Form>
            <Form.Group className="container text-center checkCodeBox mt-2 mb-2">
                <Form.Label className=''>Код</Form.Label>
                <Form.Control
                className='rounded-4 formCheckCode'
                type="text"
                value={code}
                onChange={e => setCode(e.target.value)}
                />
            </Form.Group>
            <div className='d-flex justify-content-center align-items-center me-auto ms-auto mb-2 mt-1 timer' >
                {time}
            </div>
            <div className='d-flex text-center justify-content-center align-items-center me-auto ms-auto mb-2 formLinkBox '>
                Если код не пришел, попробуйте снова через 30 секунд.
           </div>
            <Button onClick={() => putAccept()}  className='d-flex justify-content-center align-items-center ms-auto me-auto rounded-5 mb-2 border-0 formCheckCodeBtn'>
                 Подтвердить
           </Button>
        </Form>
    </Modal>
    );
});

export default Accept;