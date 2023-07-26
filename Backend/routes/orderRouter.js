const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const orderController = require('../controllers/orderController')

router.post('/createOrder', authMiddleware, activatedMiddleware, orderController.createOrder)

router.post('/getOrderByUserID', authMiddleware, activatedMiddleware, orderController.getOrderByUserID)
router.post('/getOrderByOrderID', authMiddleware, activatedMiddleware, orderController.getOrderByOrderID)

router.put('/changeAddressByUserID', authMiddleware, activatedMiddleware, orderController.changeAddressByUserID)
router.put('/changeAddressByOrderID', authMiddleware, activatedMiddleware, orderController.changeAddressByOrderID)

module.exports = router