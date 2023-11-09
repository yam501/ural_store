const ApiError = require('../error/ApiError')
const { Courier } = require('../models/models')

class CourierController {
    async createCourier(req, res, next) {
        try {
            const { name, number } = req.body
            const courier = await Courier.create({ name, number })
            return res.json(courier)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllCourier(req, res, next) {
        try {
            const courier = await Courier.findAll()
            return res.json(courier)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async destroyCourier(req, res, next) {
        try {
            const { number } = req.body
            const courier = await Courier.destroy({ where: { number: number } })
            return res.json(courier)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }



}


module.exports = new CourierController()