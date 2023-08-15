import { makeAutoObservable } from "mobx";
import AssortmentService from "../service/AssortmentService";

export default class AssortmentStore {
    constructor() {
        this._assortments = []
        this._assortment = {}
        makeAutoObservable(this)
    }

    setProducts(assortments) {
        this._assortments = assortments
    }

    setAssortment(assortment) {
        this._assortment = assortment
    }

    async getAllByAvailable(available) {
        const response = await AssortmentService.getAllByAvailable(available);
        this.setProducts(response.data)
    }

    async getById(id) {
        const response = await AssortmentService.getById(id);
        console.log(response.data)
        // return response.data
        this.setAssortment(response.data)
    }

    async getAll() {
        const response = await AssortmentService.getAll();
        this.setProducts(response.data)
    }

    async getByName(name) {
        const response = await AssortmentService.getAllByName(name);
        this.setProducts(response.data)
    }

    async getByType(type) {
        const response = await AssortmentService.getAllByType(type);
        this.setProducts(response.data)
    }

    async getByTypeAndName(type, name) {
        const response = await AssortmentService.getAllByTypeAndName(type, name);
        this.setProducts(response.data)
    }

    get assortments() {
        return this._assortments
    }

    get assortment() {
        return this._assortment
    }
}