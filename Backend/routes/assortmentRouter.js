const Router = require('express')
const router = new Router()
const assortmentController = require('../controllers/assortmentController') 

router.post('/setAssortment', assortmentController.set)
router.get('/getAssortment', assortmentController.get)
router.get('/getAssortmentByName', assortmentController.getByName)

module.exports = router