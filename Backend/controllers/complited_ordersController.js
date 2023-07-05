const ApiError = require('../error/ApiError')
const {Completed_Orders} = require('../models/models')

class CompletedOrdersController {
    async createComplitedOrder(req, res, next) {
        try {
            const {userId, adress, aprox_sum, complited_sum, order_time, complited_time} = req.body
            const complited_order = await Completed_Orders.create({userId, adress, aprox_sum, complited_sum, order_time, complited_time})
            return res.json(complited_order)
            
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getComplitedOrderByUserID(req, res, next) {
        try {
            const {userId} = req.body
            const complited_order = await Completed_Orders.findOne({where:{userId: userId}})
            return res.json(complited_order)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getComplitedOrderByComplitedOrderID(req, res, next) {
        try {
            const {id} = req.body
            const complited_order = await Completed_Orders.findOne({where:{id: id}})
            return res.json(complited_order)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CompletedOrdersController()