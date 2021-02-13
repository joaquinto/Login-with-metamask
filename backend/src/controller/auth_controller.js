import { v4 as uuidv4 } from 'uuid';
import { generateToken, respondWithSuccess, respondWithWarning } from '../helpers/index';
import { createUser, updateUser } from '../services/index';

// The signup controller
export const signUp = async (req, res) => {
  try {
    const user = await createUser({"address": req.body.address, "nonce": uuidv4()});
    const payload = { "id": user._id, "public_address": user.address };
    const token = await generateToken(payload);
    return respondWithSuccess(res, 201, 'User created successfully', token);
  } catch(error) {
    return respondWithWarning(res, 500, 'Oops! something bad happened');
  }
}

// The signin controller
export const signIn = async (req, res) => {
  try {
    req.user.nonce  = uuidv4();
    const user = await updateUser(req.user.address, req.user.nonce);
    const payload = {"id": user._id, "public_address": user.address};
    const token = await generateToken(payload);
    return respondWithSuccess(res, 200, 'User login successfully', token);
  } catch(error) {
    return respondWithWarning(res, 500, 'Oops! something bad happened');
  }
}
