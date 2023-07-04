const ApiError = require('../error/ApiError')
const {Basket_Product} = require('../models/models')


class BasketProductController {
    async createBasketProduct(req, res, next) {

    }

    async getAllBasketProductsByBasketID(req, res, next) {
        try {
            const {id_basket} = req.params
            const basketProduct = await Basket_Product.findOne({where:{id_basket}})
            return res.json(basketProduct)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async deleteAllBasketProductsByBasketID(req, res, next) {

    }

    async changeMoreOrLessByBasketID(req, res, next) {

    }

    async changeCountByBasketID(req, res, next) {

    }
}

module.exports = new BasketProductController()