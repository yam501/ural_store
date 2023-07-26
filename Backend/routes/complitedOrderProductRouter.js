const Router = require('express')
const router = new Router()
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const complitedOrderProductController = require('../controllers/complitedOrderProductController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/createComplitedOrderProduct', authMiddleware, activatedMiddleware, complitedOrderProductController.createComplitedOrderProduct)

router.post('/getComplitedOrderProductByComplitedOrderID', authMiddleware, activatedMiddleware, complitedOrderProductController.getComplitedOrderProductByComplitedOrderID)

module.exports = router