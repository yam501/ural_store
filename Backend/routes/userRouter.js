const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/AuthMiddleware')
const checkRole = require('../middleware/CheckRoleMiddleware')
const checkUserId = require('../middleware/CheckUserIdMiddleware')
const checkUserNumber = require('../middleware/CheckUserNumberMiddleware')

router.post('/createUser', checkRole('ADMIN'), userController.createUser)
router.post('/registration', userController.registration)
router.post('/login', userController.login)

router.get('/auth', authMiddleware, userController.check)
router.get('/getUserByNumber', checkUserNumber, userController.getUserByNumber)
router.get('/getUserByUserID', checkUserId, userController.getUserByUserID)

router.put('/sendCode', userController.sendCode)
router.put('/checkCode', userController.checkCode)
router.put('/changeDefaultAddressByNumber', userController.changeDefaultAddressByNumber)
router.put('/changeNumberByNumber', userController.changeNumberByNumber)
router.put('/changeNameByNumber', userController.changeNameByNumber)

module.exports = router