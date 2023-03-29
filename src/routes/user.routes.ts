import { Router } from 'express'
import { getAllUsersHandler, registerUserHanlder } from '../controllers/user.controller'
const userRouter = Router()

userRouter.get('/', getAllUsersHandler)
userRouter.post('/', registerUserHanlder)

export default userRouter