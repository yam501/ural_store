const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/createBasket', basketController.createBasket)
router.get('/getBasket', basketController.getBasket)
router.get('/getID', basketController.getID)

module.exports = router