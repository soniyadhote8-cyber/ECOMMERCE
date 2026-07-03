import express from 'express';
import { loginUser,registernUser,adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registernUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)

export default userRouter;