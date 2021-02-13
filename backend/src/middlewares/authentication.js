import { verifyToken, respondWithWarning, formatJwtErrorMessage } from '../helpers/index'

// Authenticate user token
export const authenticateUserToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (!token) {
    return respondWithWarning(res, 401, 'No token provided');
  }
  try {
    const { key } = verifyToken(token);
    req.auth = key;
    return next();
  } catch (error) {
    return respondWithWarning(res, 401, formatJwtErrorMessage(error.message));
  }
};