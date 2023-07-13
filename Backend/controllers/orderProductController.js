const ApiError = require('../error/ApiError')
const {OrderProduct, Assortment} = require('../models/models')

class OrderProductController {
    async createOrderProduct(req, res, next) {
        try {
            const {orderId, assortmentId, count, moreOrLess} = req.body
            const orderProduct = await OrderProduct.create({orderId, assortmentId, count, moreOrLess})
            return res.json(orderProduct)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }

    async getOrderProductByOrderID(req, res, next) {
        try {
            const {orderId} = req.body
            const orderProduct = await OrderProduct.findAll({where:{orderId:orderId}})
            return res.json(orderProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async deleteOrderProductByOrderId(req, res, next) {
        try {
            const {orderId} = req.body
            const deleted = await Assortment.destroy({where:{orderId:orderId}})
            return res.json(deleted)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }
}

module.exports = new OrderProductController()