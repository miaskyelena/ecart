import express from 'express'
import ProductLikesController from '../controllers/ProductLikes.js'

const router = express.Router()

router.get('/:productId', ProductLikesController.getProductLikes)
router.put('/:productId', ProductLikesController.incrementProductLikes)

export default router
