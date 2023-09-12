import React, { useContext, useEffect } from 'react';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { STORE_ROUTE } from '../utils/consts';
function AppRouter() {
    const {user} = useContext(Context)
    const location = useLocation()
    return (
        <Routes>
            {(user._user.role === 'ADMIN' || user._user.role === 'ADMIN_EDIT' || user._user.role === 'OPERATOR' || user._user.role === 'CASHIER')  && adminRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )} 
            {user._isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )} 
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            <Route path='*' element={<Navigate to={location} replace/>}/>
            {/* <Route path='*' element={<Navigate to={STORE_ROUTE}/>}/> */}
        </Routes>
    );
  }

export default observer(AppRouter);

