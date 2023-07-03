const ApiError = require('../error/ApiError')
const {Assortment} = require('../models/models')

class AssortmentController {
    async create(req, res) {
        
    }

    async getOneByName(req, res) {
        const {name} = req.params
        const assortment = await Assortment.findOne({where:{name}})
        return res.json(assortment)

    }

    async getAllByType(req, res) {
        const {type} = req.params
        const assortment = await Assortment.findAll({where:{type}})
        return res.json(assortment)

    }

    async deleteOneByName(req, res) {

    }

    async changeNameByName(req, res) {

    }

    async changeAvailableByName(req, res) {

    }

    async changeCostPerOneByName(req, res) {

    }

    async changeDescriptionByName(req, res) {

    }

    async changeImageByName(req, res) {
        
    }
}

module.exports = new AssortmentController()