import React, { useContext, useState, useEffect } from 'react';
import AuthIcon from './AuthIcon';
import Button from 'react-bootstrap/Button';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { check } from '../../http/userAPI';
import { useLocation } from 'react-router-dom';

const LogOutButton = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(false)
    const logOut = () => {
        localStorage.clear()
        // user.setIsAuth(false)
        // user.setUser({})
    }
    // useEffect(() => {
    //     check().then(data => {
    //      user.setIsAuth(false)
    //      user.setUser(false)
         
    //    }).finally(() => setLoading(true))
    //  }, [])
    return (
        <div className='d-flex align-items-center'>
            <Button
            onClick={() => user.logout()}
            type='submit'
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
});

export default LogOutButton;