const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/createOrder', orderController.createOrder)
router.get('/getOrderByUserID/:id_user', orderController.getOrderByUserID)
router.get('/getOrderByOrderID/:id', orderController.getOrderByOrderID)
router.put('/changeAdressByUserID/:id_user', orderController.changeAdressByUserID)
router.put('/changeAdressByOrderID/:id', orderController.changeAdressByOrderID)
router.put('/changeSumByUserID/:id_user', orderController.changeSumByUserID)
router.put('/changeSumByOrderID/:id', orderController.changeSumByOrderID)

module.exports = router