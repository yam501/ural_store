const Router = require('express')
const router = new Router()
const orderProductController = require('../controllers/order_productController')

router.post('/createOrderProduct', orderProductController.createOrderProduct)

router.get('/getOrderProductByOrderID', orderProductController.getOrderProductByOrderID)

router.delete('/deleteOrderProductByOrderId', orderProductController.deleteOrderProductByOrderId)

module.exports = router