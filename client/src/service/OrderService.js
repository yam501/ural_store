import { $authHost } from "../http";

const OrderService = {
    async createOrder(userId, address, aproxSum) {
        return new Promise((resolve) => resolve($authHost.post('api/order/createOrder', { userId, address, aproxSum })))
    },

    async getOrderByUserId(userId) {
        return new Promise((resolve) => resolve($authHost.post('api/order/getOrderByUserID', { userId })))
    },

    async getOrderByOrderId(id) {
        return new Promise((resovle) => resovle($authHost.post('api/order/getOrderByOrderID', { id })))
    },

    async changeAddressByUserId(userId, address) {
        return new Promise((resolve) => resolve($authHost.put('api/order/changeAddressByUserID', { userId, address })))
    },

    async changeAddressByOrderId(id, address) {
        return new Promise((resolve) => resolve($authHost.put('api/order/changeAddressByOrderId', { id, address })))
    }
}

export default OrderService