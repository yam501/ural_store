import { makeAutoObservable } from "mobx";
import BasketService from "../service/BasketService";
import { basketConstructor } from "../models/basketConstructor";

export default class BasketStore {
    constructor() {
        this._baskets = new basketConstructor()
        makeAutoObservable(this)
    }

    setBaskets(basket) {
        this._basket = basket
    }

    async getBasketByUserID(userId) {
        const response = await BasketService.getBasketByUserID(userId);
        // console.log(response.data)
        this.setBaskets(response)
        // console.log(this._products)
    }
   
    get basket() {
        return this._baskets
    }


}