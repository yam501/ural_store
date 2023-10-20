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

    async createOrder(userId, address, aproxSum, onConfirm) {
        const responce = await OrderService.createOrder(userId, address, aproxSum, onConfirm)
        this.setOrder(responce.data)
    }

    async getNotOnConfirmOrderByUserId(userId) {
        const responce = await OrderService.getNotOnConfirmOrderByUserId(userId)
        this.setOrder(responce.data)
    }

    async getOnConfirmOrderByUserId(userId) {
        const response = await OrderService.getOnConfirmOrderByUserId(userId)
        this.setOrder(response.data)
    }

    async getOrderByOrderId(id) {
        const responce = await OrderService.getOrderByOrderId(id)
        this.setOrder(responce.data)
    }

    async getOrderByUserId(userId) {
        const responce = await OrderService.getOrderByUserId(userId)
        this.setOrder(responce.data)
    }

    async getOneOrderByUserId(userId) {
        const responce = await OrderService.getOneOrderByUserId(userId)
        this.setOrder(responce.data)
    }

    async changeAddressByUserId(userId, address) {
        await OrderService.changeAddressByUserId(userId, address)
        this.getOrderByOrderId(userId)
    }

    async changeAddressByOrderId(id, address) {
        await OrderService.changeAddressByOrderId(id, address)
        this.getOrderByOrderId(id)
    }

    async changeOnConfirmByOrderId(id, onConfirm) {
        await OrderService.changeOnConfirmByOrderId(id, onConfirm)
        this.getNotOnConfirmOrderByUserId(id)
    }

    async changeOnCreateByOrderId(id, onCreate) {
        await OrderService.changeOnCreateByOrderId(id, onCreate)
        this.getNotOnConfirmOrderByUserId(id)
    }

    async changeOnDeliverByOrderId(id, onDeliver) {
        await OrderService.changeOnDeliverByOrderId(id, onDeliver)
        this.getNotOnConfirmOrderByUserId(id)
    }

    async changeDeliveredByOrderId(id, delivered) {
        await OrderService.changeDeliveredByOrderId(id, delivered)
        this.getNotOnConfirmOrderByUserId(id)
    }

    async changeOrderProductsCountByOrderId(id, orderProductsCount) {
        await OrderService.changeOrderProductsCountByOrderId(id, orderProductsCount)
        this.getOrderByOrderId(id)
    }

    get order() {
        return this._order
    }
} 