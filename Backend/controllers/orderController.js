const ApiError = require('../error/ApiError')
const {Order} = require('../models/models')

class OrderController {
    async createOrder(req, res) {

    }

    async getOrderByUserID(req, res) {
        const {id_user} = req.params
        const order = await Order.findOne({where:{id_user}})
        return res.json(order)

    }

    async getOrderByOrderID(req, res) {
        const {id} = req.params
        const order = await Order.findOne({where:{id}})
        return res.json(order)

    }

    async changeAdressByUserID(req, res) {

    }

    async changeAdressByOrderID(req, res) {

    }

    async changeSumByUserID(req, res) {

    }

    async changeSumByOrderID(req, res) {
        
    }
}

module.exports = new OrderController()