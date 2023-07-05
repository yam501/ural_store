const ApiError = require('../error/ApiError')
const {User} = require('../models/models')

class UserRouter {
    async createUser(req, res, next) {
        try {
            const {name, number, defualt_adress} = req.body
            const user = await User.create({name, number, defualt_adress})
            return res.json(user)
            
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }


    async getUserByNumber(req, res, next) {
        try {
            const {number} = req.body
            const user = await User.findOne({where:{number: number}})
            return res.json(user)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getUserByUserID(req, res, next) {
        try {
            const {id} = req.body
            const user = await User.findOne({where:{id: id}})
            return res.json(user)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async changeDefaultAdressByNumber(req, res, next) {
        try {
            const {number, defualt_adress} = req.body
            const updated = await User.update({defualt_adress: defualt_adress} , {where:{number: number}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async changeNumberByNumber(req, res, next) {
        try {
            const {oldNumber, newNumber} = req.body
            const updated = await User.update({number: newNumber} , {where:{number: oldNumber}})
            return res.json(updated)

        } catch (e){
            next(ApiError.badRequest(e.message)) 
        }
    }

    async changeNameByNumber(req, res, next) {
        try {
            const {number, name} = req.body
            const user = await User.update({name: name} , {where:{number: number}})
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


// try {

// } catch (e){
    
// }
module.exports = new UserRouter()