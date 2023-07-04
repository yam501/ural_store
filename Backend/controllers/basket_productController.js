const ApiError = require('../error/ApiError')
const {Basket_Product} = require('../models/models')


class BasketProductController {
    async createBasketProduct(req, res, next) {
        try {
            const {id_basket, id_product, count, more_or_less} = req.body
            const created = await Basket_Product.create({id_basket, id_product, count, more_or_less})
            return res.json(created)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAllBasketProductsByBasketID(req, res, next) {
        try {
            const {id_basket} = req.body
            const basketProduct = await Basket_Product.findOne({where:{id_basket: id_basket}})
            return res.json(basketProduct)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async deleteAllBasketProductsByBasketID(req, res, next) {
        try {
            const {id_basket} = req.body
            const deleted = await Basket_Product.destroy({where: {id_basket: id_basket}})
            return res.json(deleted)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeMoreOrLessByBasketID(req, res, next) {
        try {
            const {id_basket, more_or_less} = req.body
            const updated = await Basket_Product.update({more_or_less: more_or_less}, {where: {id_basket: id_basket}})
            return res.json(updated)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeCountByBasketID(req, res, next) {
        try {
            const {id_basket, count} = req.body
            const updated = await Basket_Product.update({count: count}, {where: {id_basket: id_basket}})
            return res.json(updated)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new BasketProductController()