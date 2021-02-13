import { Router } from 'express';
import { fetchAllUsers, fetchUser } from '../../controller/index'
import { inputValidation, checkUser } from '../../middlewares/index'

const userRouter = Router()

// Fetch all users
userRouter.get("/", fetchAllUsers);

// Fetch user by public address
userRouter.get("/:address", inputValidation, checkUser, fetchUser);

export default userRouter;
