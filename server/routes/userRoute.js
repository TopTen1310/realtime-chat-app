import express from 'express'
import { getUsers } from '../controllers/userController.js'
import { verifyUser } from '../middlewares/tokenMiddleware.js'

const router = express.Router()

router.get('/:userId', verifyUser, getUsers)

export default router