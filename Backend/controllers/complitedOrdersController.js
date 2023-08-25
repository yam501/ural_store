const ApiError = require('../error/ApiError')
const {ComplitedOrders} = require('../models/models')

class ComplitedOrdersController {
    async createComplitedOrder(req, res, next) {
        try {
            const {userId, address, complitedSum, orderTime, complitedTime} = req.body
            const complitedOrder = await ComplitedOrders.create({userId, address, complitedSum, orderTime, complitedTime})
            return res.json(complitedOrder)
            
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllComplitedOrdersByUserID(req, res, next) {
        try {
            let  {userId,limit, page} = req.body
            page = page || 1
            limit = limit || 5
            let offset = page * limit - limit
    
            const complitedOrders = await ComplitedOrders.findAll({where:{userId: userId},limit, offset})
            return res.json(complitedOrders)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getComplitedOrderByComplitedOrderID(req, res, next) {
        try {
            const {id} = req.body
            const complitedOrder = await ComplitedOrders.findOne({where:{id: id}})
            return res.json(complitedOrder)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ComplitedOrdersController()