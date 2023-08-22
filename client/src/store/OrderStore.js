import { makeAutoObservable } from "mobx";
import OrderService from "../service/OrderService";

export default class OrderStore {
    constructor() {
        this._order = {}
        makeAutoObservable(this)
    }

    setOrder(order) {
        this._order = order
    }

    async createOrder(userId, address, aproxSum) {
        const responce = await OrderService.createOrder(userId, address, aproxSum)
        this.setOrder(responce.data)
    }

    async getOrderByUserId(userId) {
        const responce = await OrderService.getOrderByUserId(userId)
        this.setOrder(responce.data)
    }

    async getOrderByOrderId(id) {
        const responce = await OrderService.getOrderByOrderId(id)
        this.setOrder(responce.data)
    }

    async changeAddressByUserId(userId, address) {
        await OrderService.changeAddressByUserId(userId, address)
        this.getOrderByUserId(userId)
    }

    async changeAddressByOrderId(id, address) {
        await OrderService.changeAddressByOrderId(id, address)
        this.getOrderByOrderId(id)
    }

    get order() {
        return this._order
    }
} 