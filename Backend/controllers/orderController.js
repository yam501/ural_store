const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')

class OrderController {
    async createOrder(req, res, next) {
        try {
            const {userId, adress, aprox_sum} = req.body
            const order = await Order.create({userId, adress, aprox_sum})
            return res.json(order)

        } catch (e){
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

    async changeAdressByUserID(req, res, next) {
        try {
            const {userId, adress} = req.body
            const updated = await Order.update({adress: adress} , {where:{userId: userId}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))    
        }
    }

    async changeAdressByOrderID(req, res, next) {
        try {
            const {id, adress} = req.body
            const updated = await Order.update({adress: adress} , {where:{id: id}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))      
        }
    }

    async changeSumByUserID(req, res, next) {
        try {
            const {userId, aprox_sum} = req.body
            const updated = await Order.update({aprox_sum: aprox_sum} , {where:{userId: userId}})
            return res.json(updated)        
        } catch (e){
            next(ApiError.badRequest(e.message))           
        }
    }

    async changeSumByOrderID(req, res, next) {
        try {
            const {id, aprox_sum} = req.body
            const updated = await Order.update({aprox_sum: aprox_sum} , {where:{id: id}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))            
        }
    }
}

module.exports = new OrderController()