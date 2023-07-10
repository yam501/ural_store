const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/AuthMiddleware')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/createUser', checkRole('ADMIN'), userController.createUser)
router.post('/registration', userController.registration)
router.post('/login', userController.login)

router.get('/auth', authMiddleware, userController.check)
router.get('/getUserByNumber', userController.getUserByNumber)
router.get('/getUserByUserID', userController.getUserByUserID)

router.put('/changeDefaultAdressByNumber', userController.changeDefaultAdressByNumber)
router.put('/changeNumberByNumber', userController.changeNumberByNumber)
router.put('/changeNameByNumber', userController.changeNameByNumber)

module.exports = router