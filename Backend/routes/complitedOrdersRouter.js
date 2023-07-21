const Router = require('express')
const router = new Router()
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const authMiddleware = require('../middleware/AuthMiddleware')
const complitedOrdersController = require('../controllers/complitedOrdersController')

router.post('/createComplitedOrder', authMiddleware, activatedMiddleware, complitedOrdersController.createComplitedOrder)

router.get('/getComplitedOrderByUserID', authMiddleware, activatedMiddleware, complitedOrdersController.getComplitedOrderByUserID)
router.get('/getComplitedOrderByComplitedOrderID', authMiddleware, activatedMiddleware, complitedOrdersController.getComplitedOrderByComplitedOrderID)

module.exports = router