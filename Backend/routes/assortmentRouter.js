const Router = require('express')
const router = new Router()
const assortmentController = require('../controllers/assortmentController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/createProduct', checkRole('ADMIN'), assortmentController.create)

router.get('/getProductByName', assortmentController.getOneByName)
router.get('/getAllProductsByType', assortmentController.getAllByType)
router.get('/getAllProductsByTypeAndAvailable', assortmentController.getAllByTypeAndAvailable)

router.delete('/deleteProductByName', checkRole('ADMIN'), assortmentController.deleteOneByName)

router.put('/changeProductNameByName', checkRole('ADMIN'), assortmentController.changeNameByName)
router.put('/changeProductAvailableByName', checkRole('ADMIN'), assortmentController.changeAvailableByName)
router.put('/changeProductCostPerOneByName', checkRole('ADMIN'), assortmentController.changeCostPerOneByName)
router.put('/changeProductDescriptionByName', checkRole('ADMIN'), assortmentController.changeDescriptionByName)
router.put('/changeProductCompositionByName', checkRole('ADMIN'),  assortmentController.changeCompositionByName)
router.put('/changeProductImageByName', checkRole('ADMIN'), assortmentController.changeImageByName)

module.exports = router