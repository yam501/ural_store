import React from 'react';
import AuthIcon from './AuthIcon';
import Button from 'react-bootstrap/Button';

const AuthButton = () => {
    return (
        <Button  
        className='btnAuth'
        ><AuthIcon className='btnIcon'/><span className='btnText'>Войти</span></Button>
    );
};

export default AuthButton;