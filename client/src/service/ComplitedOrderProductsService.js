import { $authHost, $host } from "../http";

const ComplitedOrderProductsService = {
    async createComplitedOrderProduct(complitedOrderId, assotmentId, count) {
        return new Promise((resolve) => resolve($authHost.post('/api/complitedOrderProduct/createComplitedOrderProduct',
            { complitedOrderId, assotmentId, count })))
    },

    async getAllComplitedOrderProductsByComplitedOrderId(complitedOrderId) {
        return new Promise((resolve) => resolve($authHost.post('api/complitedOrderProduct/getComplitedOrderProductByComplitedOrderID', {complitedOrderId})))
    }
}

export default ComplitedOrderProductsService