const ApiError = require('../error/ApiError')
const {Order_Product} = require('../models/models')

class OrderProductController {
    async createOrderProduct(req, res, next) {
        try {
            const {orderId, assortmentId, count, more_or_less} = req.body
            const orderProduct = await Order_Product.create({orderId, assortmentId, count, more_or_less})
            return res.json(orderProduct)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }

    async getOrderProductByOrderID(req, res, next) {
        try {
            const {orderId} = req.body
            const orderProduct = await Order_Product.findOne({where:{orderId:orderId}})
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