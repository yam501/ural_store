const ApiError = require('../error/ApiError')
const {Assortment} = require('../models/models')

class AssortmentController {
    async create(req, res, next) {
        try {
            const {type, name, available, cost_per_one, description} = req.body
            const assortment = await Assortment.create({type, name, available, cost_per_one, description})
            return res.json(assortment)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getOneByName(req, res, next) {
        try {
            const {name} = req.body
            const assortment = await Assortment.findOne({where:{name}})
            return res.json(assortment)
        } catch(error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAllByType(req, res, next) {
        try {
            const {type} = req.body
            const assortment = await Assortment.findAll({where:{type}})
            return res.json(assortment)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }

    }

    async deleteOneByName(req, res, next) {
        try {
            const {name} = req.body
            const deleted = await Assortment.destroy({where:{name}})
            return res.json(deleted)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async changeNameByName(req, res, next) {
        
    }

    async changeAvailableByName(req, res, next) {

    }

    async changeCostPerOneByName(req, res, next) {

    }

    async changeDescriptionByName(req, res, next) {

    }

    async changeImageByName(req, res, next) {
        
    }
}

module.exports = new AssortmentController()