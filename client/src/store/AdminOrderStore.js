import { makeAutoObservable, makeObservable } from "mobx";
import OrderService from "../service/OrderService";

export default class AdminOrderStore {
    constructor() {
        this._orders = []
        makeObservable(this)
    }

    setOrders(orders) {
        this._orders = orders
    }

    deleteOrder(id) {
        this._orders = this._orders.filter((order) => order.id !== id)
    }

    async getAll() {
        const responce = await OrderService.getAll()
        this.setOrders(responce.data)
    }
}