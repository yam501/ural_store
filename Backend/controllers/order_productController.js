const ApiError = require('../error/ApiError')
const {Order_Product} = require('../models/models')

class OrderProductController {
    async createOrderProduct(req, res, next) {
        try {
            const {id_order, id_product, count, more_or_less} = req.body
            const orderProduct = await Order_Product.create({id_order, id_product, count, more_or_less})
            return res.json(orderProduct)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }

    async getOrderProductByOrderID(req, res, next) {
        try {
            const {id_order} = req.body
            const orderProduct = await Order_Product.findOne({where:{id_order}})
            return res.json(orderProduct)
        } catch (error) {
            next(ApiError.badRequest(e.message))
        }

    }

    async deleteOrderProductByOrderId(req, res, next) {
        try {
            const {id_order} = req.body
            const deleted = await Assortment.destroy({where:{id_order:id_order}})
            return res.json(deleted)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }

    async changeCountByOrderID(req, res, next) {
        try {
            const {id_order, count} = req.body
            const updated = await Order.update({count: count} , {where:{id_order: id_order}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }

    async changeMoreOrLessByOrderID(req, res, next) {
        try {
            const {id_order, more_or_less} = req.body
            const updated = await Order.update({more_or_less: more_or_less} , {where:{id_order: id_order}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }        

    }
}


// try {

// } catch (e){
    // next(ApiError.badRequest(error.message))
    
// }

module.exports = new OrderProductController()