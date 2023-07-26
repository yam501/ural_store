import { makeAutoObservable } from "mobx";
import AssortmentService from "../service/AssortmentService";

export default class ProductStore {
    constructor() {
        this._products = []
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }

    async getAll(type) {
        const response = await AssortmentService.getAllByTypeAndAvailable(type);
        this.setProducts(response.data)
        console.log(response.data)
    }

    get products() {
        return this._products
    }
}