import { $authHost, $host } from "../http";

const BasketService = {
    
    async getBasketByUserID(userId) {
        return new Promise((resolve) => resolve($authHost.post('api/basket/getBasketByUserID', {userId})))
    },


    async getBasketByBasketID(id) {
        return new Promise((resolve) => resolve($authHost.post('api/basket/getBasketByBasketID', {id})))
    },


    async updateSum(aproxSum, id) {
        return new Promise((resolve) => resolve($authHost.post('api/basket/updateSum', {aproxSum, id})))
    },
}

export default BasketService;