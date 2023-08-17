const Router = require('express')
const router = new Router()
const assortmentController = require('../controllers/assortmentController')
const checkRole = require('../middleware/CheckRoleMiddleware')

router.post('/createProduct', checkRole('ADMIN'), assortmentController.create)

router.post('/getAll', assortmentController.getAll)
router.post('/getOne', assortmentController.getById)
router.post('/getAllByProductByName', assortmentController.getAllByName)
router.post('/getAllProductsByType', assortmentController.getAllByType)
router.post('/getAllProductsByAvailable', assortmentController.getAllByAvailable)
router.post('/getAllProductsByTypeAndAvailable', assortmentController.getAllByTypeAndAvailable)
router.post('/getAllProductsByTypeAndName', assortmentController.getAllByTypeAndName)


router.post('/deleteProductByName', checkRole('ADMIN'), assortmentController.deleteOneByName)

router.put('/changeProductNameByName', checkRole('ADMIN'), assortmentController.changeNameByName)
router.put('/changeProductAvailableByName', checkRole('ADMIN'), assortmentController.changeAvailableByName)
router.put('/changeProductCostPerOneByName', checkRole('ADMIN'), assortmentController.changeCostPerOneByName)
router.put('/changeProductDescriptionByName', checkRole('ADMIN'), assortmentController.changeDescriptionByName)
router.put('/changeProductCompositionByName', checkRole('ADMIN'),  assortmentController.changeCompositionByName)
router.put('/changeProductImageByName', checkRole('ADMIN'), assortmentController.changeImageByName)
router.put('/changeTypeByName', checkRole('ADMIN'), assortmentController.changeTypeByName)

module.exports = router