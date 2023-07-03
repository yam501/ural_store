const Router = require('express')
const router = new Router()
const assortmentController = require('../controllers/assortmentController') 

router.post('/createProduct', assortmentController.create)
router.get('/getProductByName/:name', assortmentController.getOneByName)
router.get('/getAllProductsByType/:type', assortmentController.getAllByType)
router.delete('/deleteProductByName/:name', assortmentController.deleteOneByName)
router.put('/changeProductNameByName/:name', assortmentController.changeNameByName)
router.put('/changeProductAvailableByName/:name', assortmentController.changeAvailableByName)
router.put('/changeProductCostPerOneByName/:name', assortmentController.changeCostPerOneByName)
router.put('/changeProductDescriptionByName/:name', assortmentController.changeDescriptionByName)
router.put('/changeProductImageByName/:name', assortmentController.changeImageByName)

module.exports = router