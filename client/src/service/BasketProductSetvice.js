import { $authHost, $host } from "../http";

const BasketProductService = {

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

export default BasketProductService;