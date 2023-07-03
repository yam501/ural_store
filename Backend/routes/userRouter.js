const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/createUser', userController.createUser)
router.get('/getUserByNumber/:number', userController.getUserByNumber)
router.get('/getUserByUserID/:id', userController.getUserByUserID)
router.put('/changeDefaultAdressByNumber/:number', userController.changeDefaultAdressByNumber)
router.put('/changeNumberByNumber/:number', userController.changeNumberByNumber)
router.put('/changeNameByNumber/:number', userController.changeNameByNumber)

module.exports = router