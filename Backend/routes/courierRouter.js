const Router = require('express')
const router = new Router()
const activatedMiddleware = require('../middleware/ActivatedMiddleware')
const authMiddleware = require('../middleware/AuthMiddleware')
const courierController = require('../controllers/courierController')
const checkRole = require('../middleware/CheckRoleMiddleware')



router.post('/createCourier', authMiddleware, activatedMiddleware, checkRole(['ADMIN']), courierController.createCourier)

router.post('/getAllCourier', authMiddleware, activatedMiddleware, checkRole(['ADMIN','OPERATOR']), courierController.getAllCourier)

router.post('/destroyCourier', authMiddleware, activatedMiddleware, checkRole(['ADMIN']), courierController.destroyCourier)

module.exports = router