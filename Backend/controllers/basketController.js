const ApiError = require('../error/ApiError')
const {Basket, Basket_Product, Assortment} = require('../models/models')


class BasketController {
    async createBasket(req, res, next) {
        try {
            const {userId} = req.body
            const aprox_sum = 0
            const basket = await Basket.create({userId, aprox_sum})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getBasketByUserID(req, res, next) {
        try {
            const {userId} = req.body
            const basket = await Basket.findOne({where:{userId: userId}})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getBasketByBasketID(req, res, next) {
        try {
            const {id} = req.body
            const basket = await Basket.findOne({where:{id: id}})
            return res.json(basket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async updateSum(id) {
        const basketProducts = await Basket_Product.findAll({where: {basketId: id}})
        let new_sum = 0
        basketProducts.forEach(element => new_sum += element['count'] * element['cost_per_one'])
        await Basket.update({aprox_sum: new_sum}, {where: {id: id}})
    }
}

module.exports = new BasketController()