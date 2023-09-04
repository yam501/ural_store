import { $authHost } from "../http";

const OrderService = {
    async createOrder(userId, address, aproxSum, onConfirm) {
        return new Promise((resolve) => resolve($authHost.post('api/order/createOrder', { userId, address, aproxSum, onConfirm })))
    },

    async getOrderByUserId(userId) {
        return new Promise((resolve) => resolve($authHost.post('api/order/getOrderByUserID', { userId })))
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
    }
}

export default OrderService