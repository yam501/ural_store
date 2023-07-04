const ApiError = require('../error/ApiError')
const {User} = require('../models/models')

class UserRouter {
    async createUser(req, res, next) {

    }


    async getUserByNumber(req, res, next) {
        try {
            const {number} = req.body
            const user = await User.findOne({where:{number}})
            return res.json(user)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getUserByUserID(req, res, next) {
        try {
            const {id} = req.body
            const user = await User.findOne({where:{id}})
            return res.json(user)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }


    }

    async changeDefaultAdressByNumber(req, res, next) {

    }

    async changeNumberByNumber(req, res, next) {

    }

    async changeNameByNumber(req, res, next) {
        try {
            const {number, name} = req.body
            const user = await User.update({name: name} , {where:{number}})
            return res.json(user)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
}


// Изменяем имя пользователя с `userId = 2`
// await User.update(
//     {
//       firstName: 'John',
//     },
//     {
//       where: {
//         userId: 2,
//       },
//     }
//   )
module.exports = new UserRouter()