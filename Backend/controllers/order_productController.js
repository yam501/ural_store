const ApiError = require('../error/ApiError')
const {Order_Product} = require('../models/models')

class OrderProductController {
    async createOrderProduct(req, res) {

    }

    async getOrderProductByOrderID(req, res) {
        const {id_order} = req.params
        const orderProduct = await Order_Product.findOne({where:{id_order}})
        return res.json(orderProduct)

    }

    async deleteOrderProductByOrderId(req, res) {

    }

    async changeCountByOrderID(req, res) {

    }

    async changeMoreOrLessByOrderID(req, res) {

    }
}

module.exports = new OrderProductController()