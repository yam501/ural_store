import { $authHost, $host } from "../http";

const ComplitedOrdersService = {
    async getAllComplitedOrdersByUserId(userId, limit, page) {
        return new Promise((resolve) => resolve($authHost.post('api/complitedOrder/getAllComplitedOrdersByUserID', { userId, limit, page })))
    },

    async getComplitedOrderByCompliterOrderId(complitedOrderId) {
        return new Promise((resolve) => resolve($authHost.post('api/complitedOrder/getComplitedOrderByComplitedOrderID', { complitedOrderId })))
    },

    async createComplitedOrder(userId, address, complitedSum, orderTime, complitedTime) {
        return new Promise((resolve) => resolve($authHost.post('api/complitedOrder/createComplitedOrder', {
            userId, address, complitedSum,
            orderTime, complitedTime
        })))
    },

    async repeatOrder(complitedOrderId, basketId) {
        return new Promise((resolve) => resolve($authHost.post(
            'api/complitedOrder/repeatOrderByComplitedOrderIdAndBasketId',
            {complitedOrderId, basketId}
        )))
    }
}

export default ComplitedOrdersService