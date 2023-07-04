const ApiError = require('../error/ApiError')
const {Basket_Product} = require('../models/models')


class BasketProductController {
    async createBasketProduct(req, res, next) {
        try {
            const {id_basket, id_product, count, more_or_less} = req.body
            const basketProduct = await Basket_Product.create({id_basket, id_product, count, more_or_less})
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllBasketProductsByBasketID(req, res, next) {
        try {
            const {id_basket} = req.body
            const basketProduct = await Basket_Product.findOne({where:{id_basket: id_basket}})
            return res.json(basketProduct)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async deleteAllBasketProductsByBasketID(req, res, next) {
        try {
            const {id_basket} = req.body
            const deleted = await Basket_Product.destroy({where: {id_basket: id_basket}})
            return res.json(deleted)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeMoreOrLessByBasketID(req, res, next) {
        try {
            const {id_basket, more_or_less} = req.body
            const updated = await Basket_Product.update({more_or_less: more_or_less}, {where: {id_basket: id_basket}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async changeCountByBasketID(req, res, next) {
        try {
            const {id_basket, count} = req.body
            const updated = await Basket_Product.update({count: count}, {where: {id_basket: id_basket}})
            return res.json(updated)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketProductController()