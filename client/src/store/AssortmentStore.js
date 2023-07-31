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

    async getAll() {
        const response = await AssortmentService.getAll();
        response.data.map(e => e["isDel"] = false)
        this.setProducts(response.data)
    }

    async getByName(name) {
        const response = await AssortmentService.getAllByName(name);
        response.data.map(e => e["isDel"] = false)
        this.setProducts(response.data)
    }

    async getByType(type) {
        const response = await AssortmentService.getAllByType(type);
        response.data.map(e => e["isDel"] = false)
        this.setProducts(response.data)
    }

    async getByTypeAndName(type, name) {
        const response = await AssortmentService.getAllByTypeAndName(type, name);
        response.data.map(e => e["isDel"] = false)
        this.setProducts(response.data)
    }

    get assortments() {
        return this._assortments
    }
}