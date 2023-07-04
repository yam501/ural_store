const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/createBasket', basketController.createBasket)

router.get('/getBasketByUserID', basketController.getBasketByUserID)
router.get('/getBasketByBasketID', basketController.getBasketByBasketID)

router.put('/changeSumByBasketID', basketController.changeSumByBasketID)
router.put('/changeSumByUserID', basketController.changeSumByUserID)

module.exports = router