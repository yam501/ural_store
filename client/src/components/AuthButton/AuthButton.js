import React from 'react';
import { useState } from 'react';
import AuthIcon from './AuthIcon';
import Button from 'react-bootstrap/Button';
import AuthWindow from './AuthWindow';
import Accept from './Accept';

const AuthButton = () => {
    const [show, setShow] = useState(false);
    const [accept, setAccept] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button
            className='ms-3 d-flex justify-content-around align-items-center rounded-pill btnAuth'
            onClick={handleShow}
                ><div className='d-flex justify-content-around align-items-center w-100'>
                    <AuthIcon className='btnIcon'/>
                    <span className='btnText'>Войти</span>
                </div>
            </Button>
            <AuthWindow show={show} handleClose={handleClose}/>
            {/* <Accept show={show} handleClose={handleClose} accept={accept}/> */}
        </div> 
    );
};

export default AuthButton;