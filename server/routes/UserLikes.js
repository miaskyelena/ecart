import express from 'express'
import UserLikesController from '../controllers/UserLikes.js'

const router = express.Router()

router.post('/', UserLikesController.addUserLike)
router.get('/:userEmail', UserLikesController.getUserLikes)
router.delete('/:userEmail/:productId', UserLikesController.deleteUserLike)

export default router