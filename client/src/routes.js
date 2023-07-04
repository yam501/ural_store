import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import HistoryOrder from "./pages/HistoryOrder"
import Order from "./pages/Order"
import Store from "./pages/Store"
import User from "./pages/User"
import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, HISTORYORDER_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE, STORE_ROUTE, USER_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: HISTORYORDER_ROUTE,
        Component: HistoryOrder
    },
    {
        path: USER_ROUTE,
        Component: User
    }

]

export const publicRoutes = [
    {
        path: STORE_ROUTE,
        Component: Store
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        COmponent: Auth
    }
]