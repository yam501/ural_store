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
        this.setProducts(response.data)
    }

    async getAllByAvailable(available) {
        const response = await AssortmentService.getAllByAvailable(available);
        this.setProducts(response.data)
    }

    async getAll() {
        const response = await AssortmentService.getAll();
        this.setProducts(response.data)
    }

    get assortments() {
        return this._assortments
    }
}