import { Router } from 'express'
import { postUser } from '../controllers/userController.js'
import { schemaValidator } from '../middlewares/schemaValidator.js'

const userRouter = Router()

userRouter.post('/', schemaValidator, postUser)

export default userRouter
