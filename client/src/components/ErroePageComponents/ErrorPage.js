import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { STORE_ROUTE } from '../../utils/consts';
import { Container } from 'react-bootstrap';

import './errorPage.css'
import { Context } from '../..';

const ErrorPage = () => {
    const { user } = useContext(Context)


    return (
        <Container className='d-flex justify-content-center align-items-center page_body error_body'>
            {!user._isAuth ?
                <div>
                    Зарегестрируйтесь, чтобы посмотреть страницу
                </div>
                :
                <div className="text-center">
                    Похоже у нас нет такой страницы😢 <br/> вернитесь в магазин
                </div>
            }
            <div className='error_content'>
                <NavLink to={STORE_ROUTE} className='text-decoration-none'><button className='btn-returnToStore text-white'>К отделам</button></NavLink>
            </div>
        </Container>
    );
};

export default ErrorPage;