import { makeAutoObservable } from "mobx";
import BasketService from "../service/BasketService";
import { basketConstructor } from "../models/basketConstructor";

export default class BasketStore {
    constructor() {
        this._baskets = {}
        makeAutoObservable(this)
    }

    setBaskets(basket) {
        this._basket = basket
    }

    async getBasketByUserID(userId) {
        const response = await BasketService.getBasketByUserID(userId);
        console.log(response.data)
        this.setBaskets(response.data)
        // console.log(this._products)
    }
   
    get basket() {
        return this._baskets
    }


}