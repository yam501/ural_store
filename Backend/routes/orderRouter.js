const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const checkRole = require('../middleware/CheckRoleMiddleware')
const orderController = require('../controllers/orderController')

router.post('/createOrder', authMiddleware, activatedMiddleware, orderController.createOrder)

router.post('/getOrderByUserID', authMiddleware, activatedMiddleware, orderController.getOrderByUserID)
router.post('/getOrderByOrderID', authMiddleware, activatedMiddleware, orderController.getOrderByOrderID)
router.post('/getAll', authMiddleware, activatedMiddleware, checkRole(['ADMIN', 'ADMIN_EDIT']), orderController.getAll)

router.put('/changeAddressByUserID', authMiddleware, activatedMiddleware, orderController.changeAddressByUserID)
router.put('/changeAddressByOrderID', authMiddleware, activatedMiddleware, orderController.changeAddressByOrderID)
router.put('/changeOnConfirmByOrderID', authMiddleware, activatedMiddleware, orderController.changeOnConfirmByOrderID)

module.exports = router