import { findAllUsers, findUser } from '../services/index';
import { respondWithSuccess, respondWithWarning } from '../helpers/index';

// Fetch user controller
export const fetchUser = async (req, res) => {
  try {
    const user = await findUser({"address": req.params.address});
    return !user ? respondWithWarning(res, 404, 'User not found')
      : respondWithSuccess(res, 200, 'User fetched successfully', user);
  } catch(error) {
    return respondWithWarning(res, 500, 'Oops! something bad happened');
  }
}

// Fetch all users controller
export const fetchAllUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    return users.length < 1 ? respondWithWarning(res, 404, 'Users not found')
      : respondWithSuccess(res, 200, 'Users fetched successfully', users);
  } catch(error) {
    return respondWithWarning(res, 500, 'Oops! something bad happened');
  }
}