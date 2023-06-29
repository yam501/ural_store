const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/createOrder', orderController.createOrder)
router.get('/getOrder', orderController.getOrder)
router.get('/getOrderId', orderController.getID)
router.get('/getOrderByUserID', orderController.getOrderByUserID)

module.exports = router