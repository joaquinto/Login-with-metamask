import { Router } from 'express'
import auth from './api/auth_route';
import user from './api/user_route';

const apiRouter = Router();

// Api Routes
apiRouter.use('/api/v1/auth', auth);
apiRouter.use('/api/v1/users', user);

export default apiRouter;
