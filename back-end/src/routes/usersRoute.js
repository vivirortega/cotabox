import { Router } from 'express'
import { postUser } from '../controllers/userController.js'
import { userSchema } from '../schemas/userSchema.js'

const userRouter = Router()

userRouter.post('/', postUser)

export default userRouter
