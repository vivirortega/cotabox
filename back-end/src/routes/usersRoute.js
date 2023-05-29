import { Router } from 'express'
import { postUser, getUsers } from '../controllers/userController.js'
import { schemaValidator } from '../middlewares/schemaValidator.js'

const userRouter = Router()

userRouter.post('/', schemaValidator, postUser)
userRouter.get('/', getUsers)

export default userRouter
