import { $authHost } from "../http";

const OrderService = {
    async createOrder(userId, address, aproxSum, onConfirm) {
        return new Promise((resolve) => resolve($authHost.post('api/order/createOrder', { userId, address, aproxSum, onConfirm })))
    },

    async getNotOnConfirmOrderByUserId(userId) {
        return new Promise((resolve) => resolve($authHost.post('api/order/getNotOnConfirmOrderByUserID', { userId })))
    },

    async getOnConfirmOrderByUserId(userId) {
        return new Promise((resolve) => resolve($authHost.post('api/order/getOnConfirmOrderByUserID', {userId})))
    },

    async getOrderByOrderId(id) {
        return new Promise((resovle) => resovle($authHost.post('api/order/getOrderByOrderID', { id })))
    },

    async getAll() {
        return new Promise((resolve) => resolve($authHost.post('api/order/getAll')))
    },

    async changeAddressByUserId(userId, address) {
        return new Promise((resolve) => resolve($authHost.put('api/order/changeAddressByUserID', { userId, address })))
    },

    async changeAddressByOrderId(id, address) {
        return new Promise((resolve) => resolve($authHost.put('api/order/changeAddressByOrderId', { id, address })))
    },

    async changeOnConfirmByOrderId(id, onConfirm) {
        return new Promise((resolve) => resolve($authHost.put('api/order/changeOnConfirmByOrderID', {id, onConfirm})))
    },

    async changeOrderProductsCountByOrderId(id, orderProductsCount) {
        return new Promise((resolve) => resolve($authHost.put('api/order/changeOrderProductsCountByOrderID', {id, orderProductsCount})))
    }
}

export default OrderService