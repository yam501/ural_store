const Router = require('express')
const router = new Router()
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const authMiddleware = require('../middleware/AuthMiddleware')
const orderProductController = require('../controllers/orderProductController')

router.post('/createOrderProduct', authMiddleware, activatedMiddleware, orderProductController.createOrderProduct)

router.get('/getOrderProductByOrderID', authMiddleware, activatedMiddleware, orderProductController.getOrderProductByOrderID)

router.delete('/deleteOrderProductByOrderId', authMiddleware, activatedMiddleware, orderProductController.deleteOrderProductByOrderId)

module.exports = router