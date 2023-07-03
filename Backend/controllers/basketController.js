const ApiError = require('../error/ApiError')
const {Basket} = require('../models/models')


class BasketController {
    async createBasket(req, res) {

    }

    async getBasketByUserID(req, res) {
        const {id_user} = req.params
        const basket = await Basket.findOne({where:{id_user}})
        return res.json(basket)
    }

    async getBasketByBasketID(req, res) {
        const {id} = req.params
        const basket = await Basket.findOne({where:{id}})
        return res.json(basket)

    }

    async changeSumByBasketID(req, res) {

    }

    async changeSumByUserID(req, res) {
        
    }
}

module.exports = new BasketController()