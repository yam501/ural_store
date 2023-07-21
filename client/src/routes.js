import AboutUs from "./pages/AboutUs"
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import HistoryOrder from "./pages/HistoryOrder"
import Order from "./pages/Order"
import Store from "./pages/Store"
import User from "./pages/User"
import { ABOUTUS_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, HISTORYORDER_ROUTE, ORDER_ROUTE, STORE_ROUTE, USER_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: ORDER_ROUTE,
        element: <Order/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    }, 
    {
        path: HISTORYORDER_ROUTE,
        element: <HistoryOrder/>
    },
    {
        path: USER_ROUTE,
        element: <User/>
    },
    {
        path: '*',
        element: <STORE_ROUTE/> 
    }
]

export const publicRoutes = [
    {
        path: STORE_ROUTE,
        element: <Store/>
    },
    {
        path: ABOUTUS_ROUTE,
        element: <AboutUs/>
    }
]