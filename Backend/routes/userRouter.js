const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/createUser', userController.createUser)

router.get('/getUserByNumber/:number', userController.getUserByNumber)
router.get('/getUserByUserID/:id', userController.getUserByUserID)

router.put('/changeDefaultAdressByNumber', userController.changeDefaultAdressByNumber)
router.put('/changeNumberByNumber', userController.changeNumberByNumber)
router.put('/changeNameByNumber', userController.changeNameByNumber)

module.exports = router