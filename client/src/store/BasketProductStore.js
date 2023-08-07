import { makeAutoObservable } from "mobx";
import BasketProductService from "../service/BasketProductService";
import { BasketProduct } from "../models/BasketProduct";

export default class BasketProductStore {
    constructor() {
        this._basketProducts = []
        this._basketProduct = new BasketProduct()
        makeAutoObservable(this)
    }

    setBasketProducts(basketProduct) {
        this._basketProducts = basketProduct
    }

    setBasketProduct(basketProduct) {
        this._basketProduct = basketProduct
    }

    

    async createBasketProduct(basketId, assortmentId, costPerOne, count, moreOrLess) {
        const response = await BasketProductService.createBasketProduct(basketId, assortmentId, costPerOne, count, moreOrLess);
        this.setBasketProduct(response.data)
        // console.log(this._products)
    }

    async getAllBasketProductsByBasketID(id) {
        const response = await BasketProductService.getAllBasketProductsByBasketID(id);
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async deleteAllBasketProductsByBasketID(id) {
        const response = await BasketProductService.deleteAllBasketProductsByBasketID(id);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async deleteOneBasketProductByBasketIDAndAssortmentID(basketId, assortmentId) {
        const response = await BasketProductService.deleteOneBasketProductByBasketIDAndAssortmentID(basketId, assortmentId);
        // console.log(response.data)
        this.setBasketProducts(response.data) 
        // console.log(this._products)
    }

    async changeMoreOrLessByBasketIDAndAssortmentID(basketId, assortmentId, moreOrLess) {
        const response = await BasketProductService.changeMoreOrLessByBasketIDAndAssortmentID(basketId, assortmentId, moreOrLess);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }

    async changeCountByBasketIDAndAssortmentID(basketId, assortmentId, count) {
        const response = await BasketProductService.changeCountByBasketIDAndAssortmentID(basketId, assortmentId, count);
        // console.log(response.data)
        this.setBasketProducts(response.data)
        // console.log(this._products)
    }


    get basketProduct() {
        return this._basketProducts
    }
}