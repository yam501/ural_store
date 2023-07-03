const ApiError = require('../error/ApiError')
const {Basket_Product} = require('../models/models')


class BasketProductController {
    async createBasketProduct(req, res) {

    }

    async getAllBasketProductsByBasketID(req, res) {
        const {id_basket} = req.params
        const basketProduct = await Basket_Product.findOne({where:{id_basket}})
        return res.json(basketProduct)

    }

    async deleteAllBasketProductsByBasketID(req, res) {

    }

    async changeMoreOrLessByBasketID(req, res) {

    }

    async changeCountByBasketID(req, res) {

    }
}

module.exports = new BasketProductController()