const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')

class OrderController {
    async createOrder(req, res, next) {
        try {
            const {id_user, adress, aprox_sum} = req.body
            const order = await Order.create({id_user, adress, aprox_sum})
            return res.json(order)

        } catch (e){
            next(ApiError.badRequest(e.message))
            
        }

    }

    async getOrderByUserID(req, res, next) {
        try {
            const {id_user} = req.body
            const order = await Order.findOne({where:{id_user: id_user}})
            return res.json(order)
        } catch (error) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getOrderByOrderID(req, res, next) {
        try {
            const {id} = req.body
            const order = await Order.findOne({where:{id: id}})
            return res.json(order)
        } catch (error) {
            next(ApiError.badRequest(e.message))
        }

    }

    async changeAdressByUserID(req, res, next) {
        try {
            const {id_user, adress} = req.body
            const updated = await Order.update({adress: adress} , {where:{id_user: id_user}})
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
            const {id_user, aprox_sum} = req.body
            const updated = await Order.update({aprox_sum: aprox_sum} , {where:{id_user: id_user}})
            return res.json(updated)
            

        } catch (e){
            nnext(ApiError.badRequest(e.message))
            
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

// try {

// } catch (e){
    // next(ApiError.badRequest(e.message))
    
// }

module.exports = new OrderController()