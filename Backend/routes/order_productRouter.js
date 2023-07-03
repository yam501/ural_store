const Router = require('express')
const router = new Router()
const orderProductController = require('../controllers/order_productController')

router.post('/createOrderProduct', orderProductController.createOrderProduct)

router.get('/getOrderProductByOrderID/:id_order', orderProductController.getOrderProductByOrderID)

router.delete('/deleteOrderProductByOrderId/:id_order', orderProductController.deleteOrderProductByOrderId)

router.put('/changeCountByOrderID/:id_order', orderProductController.changeCountByOrderID)
router.put('/changeMoreOrLessByOrderID/:id_order', orderProductController.changeMoreOrLessByOrderID)

module.exports = router