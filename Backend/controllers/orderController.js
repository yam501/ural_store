const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')

class OrderController {
    async createOrder(req, res, next) {

    }

    async getOrderByUserID(req, res, next) {
        try {
            const {id_user} = req.body
            const order = await Order.findOne({where:{id_user}})
            return res.json(order)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async getOrderByOrderID(req, res, next) {
        try {
            const {id} = req.body
            const order = await Order.findOne({where:{id}})
            return res.json(order)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async changeAdressByUserID(req, res, next) {

    }

    async changeAdressByOrderID(req, res, next) {

    }

    async changeSumByUserID(req, res, next) {

    }

    async changeSumByOrderID(req, res, next) {
        
    }
}

module.exports = new OrderController()