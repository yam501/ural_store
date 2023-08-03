import { makeAutoObservable } from "mobx";
import BasketService from "../service/BasketService";
import { BasketProduct } from "../models/BasketProduct";
import { basketConstructor } from "../models/basketConstructor";

export default class BasketProductStore {
    constructor() {
        this._baskets = new basketConstructor()
        this._basketProduct = new BasketProduct()
        makeAutoObservable(this)
    }

    setBaskets(basket) {
        this._basket = basket
    }

    setBasketProducts(basketProduct) {
        this._basketProduct = basketProduct
    }

    async createBasket(basket) {
        const response = await BasketService.createBasket(basket);
        this.setBaskets(response.data)
    }

    async getBasketByUserID(userId) {
        const response = await BasketService.getBasketByUserID(userId);
        // console.log(response.data)
        this.setBaskets(response)
        // console.log(this._products)
    }

    async getBasketByBasketID(id) {
        const response = await BasketService.getBasketByBasketID(id);
        // console.log(response.data)
        this.setBaskets(response.data)
        // console.log(this._products)
    }

    async updateSum(aproxSum, id) {
        const response = await BasketService.updateSum(aproxSum, id);
        // console.log(response.data)
        this.setBaskets(response.data)
        // console.log(this._products)
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

    get basket() {
        return this._baskets
    }

    get basketProduct() {
        return this._products
    }
}