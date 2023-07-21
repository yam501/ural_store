import React, { useContext, useState, useEffect } from 'react';
import AuthIcon from './AuthIcon';
import Button from 'react-bootstrap/Button';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import { check } from '../../http/userAPI';
import { useLocation } from 'react-router-dom';
import Accept from './Accept';

const LogOutButton = observer((props) => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(false)

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
            {/* <Accept show={props.show} handleClose={props.handleClose} number={props.number}/> */}
        </div>
    );
});

export default LogOutButton;