const Router = require('express')
const router = new Router()
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const authMiddleware = require('../middleware/AuthMiddleware')
const complitedOrdersController = require('../controllers/complitedOrdersController')

router.post('/createComplitedOrder', authMiddleware, activatedMiddleware, complitedOrdersController.createComplitedOrder)

router.post('/getAllComplitedOrdersByUserID', complitedOrdersController.getAllComplitedOrdersByUserID)
router.post('/getComplitedOrderByComplitedOrderID', authMiddleware, activatedMiddleware, complitedOrdersController.getComplitedOrderByComplitedOrderID)

module.exports = router