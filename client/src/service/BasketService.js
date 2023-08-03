import { $authHost, $host } from "../http";

const BasketService = {
    async createBasket(basket) {
        return new Promise((resolve) => resolve($authHost.post('api/basket/createBasket', basket)))
    },


    async getBasketByUserID(userId) {
        return new Promise((resolve) => resolve($authHost.post('api/basket/getBasketByUserID', {userId})))
    },


    async getBasketByBasketID(id) {
        return new Promise((resolve) => resolve($authHost.post('api/basket/getBasketByBasketID', {id})))
    },


    async updateSum(aproxSum, id) {
        return new Promise((resolve) => resolve($authHost.post('api/basket/updateSum', {aproxSum, id})))
    },


    async createBasketProduct(basketProduct) {
        return new Promise((resolve) => resolve($authHost.post('api/basketProduct/createBasketProduct', basketProduct)))
    },


    async getAllBasketProductsByBasketID(id) {
        return new Promise((resolve) => resolve($authHost.post('api/basketProduct/getAllBasketProductsByBasketID', { id })))
    },


    async deleteAllBasketProductsByBasketID(id) {
        return new Promise((resolve) => resolve($authHost.post('api/basketProduct/deleteAllBasketProductsByBasketID', {id})))
    },


    async deleteOneBasketProductByBasketIDAndAssortmentID(basketId, assortmentId) {
        return new Promise((resolve) => resolve($authHost.post('api/basketProduct/getAllByProductByName', { basketId, assortmentId })))
    },


    async changeMoreOrLessByBasketIDAndAssortmentID(basketId, assortmentId, moreOrLess) {
        return new Promise((resolve) => resolve($authHost.put('api/basketProduct/changeMoreOrLessByBasketIDAndAssortmentID', { basketId, assortmentId, moreOrLess })))
    },


    async changeCountByBasketIDAndAssortmentID(basketId, assortmentId, count) {
        return new Promise((resolve) => resolve($authHost.put('api/basketProduct/changeCountByBasketIDAndAssortmentID', { basketId, assortmentId, count })))
    },

}

export default BasketService;