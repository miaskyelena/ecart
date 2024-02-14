import express from 'express'
import ProductsController from '../controllers/products.js'

const router = express.Router()

router.get('/', ProductsController.getProducts)
router.get('/:productId', ProductsController.getProductById) 
router.post('/', ProductsController.createProduct)
router.delete('/:id', ProductsController.deleteProduct)
router.patch('/:id', ProductsController.updateProduct)
router.post('/:productId/like', ProductsController.incrementProductLikes)
router.get('/:productId/like', ProductsController.getProductLikes)


export default router