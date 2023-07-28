import { makeAutoObservable } from "mobx";
import AssortmentService from "../service/AssortmentService";

export default class AssortmentStore {
    constructor() {
        this._assortments = []
        makeAutoObservable(this)
    }

    setProducts(assortments) {
        this._assortments = assortments
    }

    async getAllByAvailable(available) {
        const response = await AssortmentService.getAllByAvailable(available);
        // console.log(response.data)
        this.setProducts(response.data)
        // console.log(this._assortments)
    }

    get assortments() {
        return this._assortments
    }
}