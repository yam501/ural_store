const Router = require('express')
const router = new Router()
const orderProductController = require('../controllers/order_productController')

router.post('/setOrderProduct', orderProductController.set)
router.get('/getOrderProduct', orderProductController.getByOrderID)
router.delete('/deleteOrderProduct', orderProductController.deleteByOrderID)

module.exports = router