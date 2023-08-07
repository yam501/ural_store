import { makeAutoObservable } from "mobx";
import BasketService from "../service/BasketService";
import { BasketProduct } from "../models/BasketProduct";

export default class BasketProductStore {
    constructor() {
        this._basketProduct = new BasketProduct()
        makeAutoObservable(this)
    }

    setBasketProducts(basketProduct) {
        this._basketProduct = basketProduct
    }

    

    async createBasketProduct() {
        const response = await BasketService.createBasketProduct(new BasketProduct());
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async getAllBasketProductsByBasketID(id) {
        const response = await BasketService.getAllBasketProductsByBasketID(id);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async deleteAllBasketProductsByBasketID(id) {
        const response = await BasketService.deleteAllBasketProductsByBasketID(id);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async deleteOneBasketProductByBasketIDAndAssortmentID(basketId, assortmentId) {
        const response = await BasketService.deleteOneBasketProductByBasketIDAndAssortmentID(basketId, assortmentId);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async changeMoreOrLessByBasketIDAndAssortmentID(basketId, assortmentId, moreOrLess) {
        const response = await BasketService.changeMoreOrLessByBasketIDAndAssortmentID(basketId, assortmentId, moreOrLess);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async changeCountByBasketIDAndAssortmentID(basketId, assortmentId, count) {
        const response = await BasketService.changeCountByBasketIDAndAssortmentID(basketId, assortmentId, count);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }


    get basketProduct() {
        return this._products
    }
}