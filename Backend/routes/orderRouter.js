const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/createOrder', orderController.createOrder)

router.get('/getOrderByUserID', orderController.getOrderByUserID)
router.get('/getOrderByOrderID', orderController.getOrderByOrderID)

router.put('/changeAdressByUserID', orderController.changeAdressByUserID)
router.put('/changeAdressByOrderID', orderController.changeAdressByOrderID)
router.put('/changeSumByUserID', orderController.changeSumByUserID)
router.put('/changeSumByOrderID', orderController.changeSumByOrderID)

module.exports = router