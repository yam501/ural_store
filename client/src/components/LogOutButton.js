import React from 'react';
import AuthIcon from './AuthIcon';
import Button from 'react-bootstrap/Button';

const LogOutButton = () => {
    return (
        <div className='d-flex align-items-center'>
            <Button
            className='ms-3 d-flex justify-content-around align-items-center rounded-pill btnAuth btnLogOut'
            >
            <span className='btnLogOutText'>Выйти</span>
            </Button>
            <Button className='ms-2 container rounded-circle adminBtn'>
                <AuthIcon/>
            </Button> 
            <Button
            className='ms-2 d-flex justify-content-around align-items-center rounded-pill btnAuth btnAdmin'
            >
            <span className='btnText'>Личный кабинет</span>
            </Button>
        </div>
    );
};

export default LogOutButton;