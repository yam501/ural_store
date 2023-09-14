import React from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { STORE_ROUTE } from '../utils/consts';

const ErrorPage = () => {
    return (
        <div>
            Похоже у нас нет такой страницы, вернитесь в магазин
            
            <NavLink to={STORE_ROUTE} className='text-decoration-none'><button className='btn-returnToStore text-white'>К отделам</button></NavLink>
        </div>
    );
};

export default ErrorPage;