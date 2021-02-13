import { Router } from 'express';
import { signIn, signUp } from '../../controller/index';
import { 
  checkDigitalSignature, checkUser, signInValidation,
  isUserExist, inputValidation
} from '../../middlewares/index';

const authRouter = Router()

// The sign up route
authRouter.post("/signup", inputValidation, isUserExist, signUp);

// The log in route
authRouter.post("/signin", signInValidation, checkUser, checkDigitalSignature, signIn);

export default authRouter;
