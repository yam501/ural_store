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
router.post('/logout', userController.logout)

router.get('/refresh', userController.refresh)
router.get('/getUserByNumber', checkUserNumber, userController.getUserByNumber)
router.get('/getUserByUserID', checkUserId, userController.getUserByUserID)

router.put('/sendCode', userController.sendCodeFromUser)
router.put('/activate', userController.activate)
router.put('/changeDefaultAddressByNumber', userController.changeDefaultAddressByNumber)
router.put('/changeNumberByNumber', userController.changeNumberByNumber)
router.put('/changeNameByNumber', userController.changeNameByNumber)

module.exports = router