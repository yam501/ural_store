import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import ErrorPage from './ErroePageComponents/ErrorPage';
function AppRouter() {
    const {user} = useContext(Context)

    return (
        <Routes>
            {(user._user.role === 'ADMIN' || user._user.role === 'ADMIN_EDIT' || user._user.role === 'OPERATOR' || user._user.role === 'CASHIER' || user._user.role === 'COURIER')  && adminRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )} 
            {user._isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )} 
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    );
  }

export default observer(AppRouter);

