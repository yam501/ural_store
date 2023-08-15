import { makeAutoObservable } from "mobx";
import ComplitedOrdersService from "../service/ComplitedOrdersService";


export default class ComplitedOrdersStore {
    constructor() {
        this._complitedOrders = []
        makeAutoObservable(this)
    }

    setComplitedOrders(complitedOrders) {
        this._complitedOrders = complitedOrders
    }

    async getAllComplitedOrdersByUserId(userId) {
        const response = await ComplitedOrdersService.getAllComplitedOrdersByUserId(userId)
        this.setComplitedOrders(response.data)
    }

    async getComplitedOrderByComplitedOrderId(complitedOrderId) {
        const responce = await ComplitedOrdersService.getComplitedOrderByComplitedOrderId(complitedOrderId)
        this.setComplitedOrders(responce.data)
    }

    async createComplitedOrder(userId, address, complitedSum, orderTime, complitedTime) {
        return await ComplitedOrdersService.createComplitedOrder(userId, address, complitedSum, orderTime, complitedTime)
    }

    get complitedOrders() {
        return this._complitedOrders
    }
}