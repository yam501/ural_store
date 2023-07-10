import React, { useContext } from 'react';
import {Routes, Route, Redirect} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';
function AppRouter() {
    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )} 
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} exact/>
            )}
            
        </Routes>
    );
  }

export default AppRouter;

