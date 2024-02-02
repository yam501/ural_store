import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {STORE_ROUTE} from '../../utils/consts';
import {Container} from 'react-bootstrap';

import './errorPage.css'
import {Context} from '../..';
import AuthWindow from "../AuthButton/AuthWindow";

const ErrorPage = () => {
    const {user} = useContext(Context)
    const [show, setShow] = useState(false);
    const handleShowControl = () => setShow(!show)

    return (
        <Container className='d-flex justify-content-center align-items-center page_body error_body'>
            {!user._isAuth ?
                <>
                    <div>
                        Зарегистрируйтесь, чтобы посмотреть страницу
                    </div>
                    <button className='btn-returnToStore text-white mt-3'
                            onClick={handleShowControl}>Регистрация
                    </button>
                </>
                :
                <>
                    <Container className="page404 page_body text-center">
                        <div>
                            Похоже у нас нет такой страницы😢 <br/> вернитесь в магазин
                        </div>
                        <div className='error_content'>
                            <NavLink to={STORE_ROUTE} className='text-decoration-none'>
                                <button className='btn-returnToStore text-white'>К отделам</button>
                            </NavLink>
                        </div>
                    </Container>
                </>
            }
            <AuthWindow show={show} handleClose={handleShowControl}/>
        </Container>
    );
};

export default ErrorPage;