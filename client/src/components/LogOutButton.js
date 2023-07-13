import React from 'react';
import AuthIcon from './AuthIcon';
import Button from 'react-bootstrap/Button';
const LogOutButton = () => {
    return (
        <div>
            <Button
            className='ms-3 d-flex justify-content-around align-items-center rounded-pill btnAuth'
                ><div className='d-flex justify-content-around align-items-center w-100'>
                    <AuthIcon className='btnIcon'/>
                    <span className='btnText'>Выйти</span>
                </div>
            </Button>
        </div>
    );
};

export default LogOutButton;