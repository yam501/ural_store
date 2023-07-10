const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')

const generateJwt = (id, number, role) => {
    return jwt.sign(
        {id, number, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {name, number, defualt_adress, password} = req.body
        if (!number || !password) {
            return next(ApiError.badRequest('Некорректный номер телефона или пароль'))
        }
        const candidate = await User.findOne({where: {number: number}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким номером телефона уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, number, defualt_adress, password: hashPassword})
        const basket = await Basket.create({userId: user.id, aprox_sum: 0})
        const token = generateJwt(user.id, user.number, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
        const {number, password} = req.body
        const user = await User.findOne({where: {number: number}})
        if (!user) {
            return next(ApiError.badRequest('Пользователь с таким номером телефона не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.badRequest('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.number, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.number, req.user.role)
        return res.json({token})
    }

    //Для тестов и личного пользования, не в продакшн
    async createUser(req, res, next) {
        try {
            const {name, number, defualt_adress} = req.body
            const user = await User.create({name, number, defualt_adress})
            await Basket.create({userId: user['id'], aprox_sum: 0})
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
module.exports = new UserController()