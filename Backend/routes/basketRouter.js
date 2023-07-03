const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/createBasket', basketController.createBasket)
router.get('/getBasketByUserID/:id_user', basketController.getBasketByUserID)
router.get('/getBasketByBasketID/:id', basketController.getBasketByBasketID)
router.put('/changeSumByBasketID/:id', basketController.changeSumByBasketID)
router.put('/changeSumByUserID/:id_user', basketController.changeSumByUserID)

module.exports = router