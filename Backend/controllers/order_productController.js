const ApiError = require('../error/ApiError')
const {Order_Product} = require('../models/models')

class OrderProductController {
    async createOrderProduct(req, res, next) {

    }

    async getOrderProductByOrderID(req, res, next) {
        try {
            const {id_order} = req.body
            const orderProduct = await Order_Product.findOne({where:{id_order}})
            return res.json(orderProduct)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async deleteOrderProductByOrderId(req, res, next) {

    }

    async changeCountByOrderID(req, res, next) {

    }

    async changeMoreOrLessByOrderID(req, res, next) {

    }
}

module.exports = new OrderProductController()