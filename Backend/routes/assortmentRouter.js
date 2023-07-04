const Router = require('express')
const router = new Router()
const assortmentController = require('../controllers/assortmentController') 

router.post('/createProduct', assortmentController.create)

router.get('/getProductByName/:name', assortmentController.getOneByName)
router.get('/getAllProductsByType/:type', assortmentController.getAllByType)

router.delete('/deleteProductByName/:name', assortmentController.deleteOneByName)

router.put('/changeProductNameByName', assortmentController.changeNameByName)
router.put('/changeProductAvailableByName', assortmentController.changeAvailableByName)
router.put('/changeProductCostPerOneByName', assortmentController.changeCostPerOneByName)
router.put('/changeProductDescriptionByName', assortmentController.changeDescriptionByName)
router.put('/changeProductImageByName', assortmentController.changeImageByName)

module.exports = router