const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')

class OrderController {
    async createOrder(req, res, next) {
        try {
            const {userId, address, aproxSum, onConfirm} = req.body
            const order = await Order.create({userId, address, aproxSum, onConfirm})
            return res.json(order)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const orders = await Order.findAll({where: {onConfirm: true}})
            return res.json(orders)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOrderByUserID(req, res, next) {
        try {
            const {userId} = req.body
            const order = await Order.findOne({where:{userId: userId}})
            return res.json(order)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getOrderByOrderID(req, res, next) {
        try {
            const {id} = req.body
            const order = await Order.findOne({where:{id: id}})
            return res.json(order)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeAddressByUserID(req, res, next) {
        try {
            const {userId, address} = req.body
            const updated = await Order.update({address: address} , {where:{userId: userId}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))    
        }
    }

    async changeAddressByOrderID(req, res, next) {
        try {
            const {id, address} = req.body
            const updated = await Order.update({address: address} , {where:{id: id}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))      
        }
    }

    async changeOnConfirmByOrderID(req, res, next) {
        try {
            const {id, onConfirm} = req.body
            const updated = await Order.update({onConfirm: onConfirm}, {where: {id: id}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new OrderController()