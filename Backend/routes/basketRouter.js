const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/createBasket', basketController.createBasket)

router.get('/getBasketByUserID', basketController.getBasketByUserID)
router.get('/getBasketByBasketID', basketController.getBasketByBasketID)

module.exports = router