import { findUser } from '../services/index';
import { respondWithWarning } from '../helpers/index';

// Check if the user exist in the database 
export const checkUser = async (req, res, next) => {
  try {
    const publicAddress = req.body.address || req.params.address;
    const user = await findUser({"address": publicAddress});
    req.user = user;
    return !user ? respondWithWarning(res, 404, 'User not found') : next();
  } catch(error) {
    return respondWithWarning(res, 500, 'Oops! something bad happened');
  }
}

// Check if the user already exist in the database 
export const isUserExist = async (req, res, next) => {
  try {
    const publicAddress = req.body.address || req.params.address;
    const user = await findUser({"address": publicAddress});
    return !user ? next() : respondWithWarning(res, 409, 'User already exist');
  } catch(error) {
    return respondWithWarning(res, 500, 'Oops! something bad happened');
  }
}
