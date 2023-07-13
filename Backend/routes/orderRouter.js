const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/createOrder', orderController.createOrder)

router.get('/getOrderByUserID', orderController.getOrderByUserID)
router.get('/getOrderByOrderID', orderController.getOrderByOrderID)

router.put('/changeAddressByUserID', orderController.changeAddressByUserID)
router.put('/changeAddressByOrderID', orderController.changeAddressByOrderID)

module.exports = router