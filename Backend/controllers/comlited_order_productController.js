const ApiError = require('../error/ApiError')
const {Complited_Order_Product} = require('../models/models')

class ComplitedOrderProductController {
    async createComplitedOrderProduct(req, res, next) {
        try {
            const {comlitedOrderId, assortmentId, count} = req.body
            const complitedOrderProduct = await Complited_Order_Product.create({comlitedOrderId, assortmentId, count})
            return res.json(complitedOrderProduct)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }

    async getComplitedOrderProductByComplitedOrderID(req, res, next) {
        try {
            const {comlitedOrderId} = req.body
            const complitedOrderProduct = await Complited_Order_Product.findAll({where:{comlitedOrderId: comlitedOrderId}})
            return res.json(complitedOrderProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new ComplitedOrderProductController()