import { User } from '../model/index';

// Create user database service
export const createUser = async (newUser) => {
  try {
    let user = await User.create(newUser);
    return user;
  } catch (error) {
    return new Error(error);
  }
};

// Find user database service
export const findUser = async (payload) => {
  try {
    const user = await User.findOne(payload);
    return user;
  } catch (error) {
    return new Error(error);
  }
};

// Find all users database service
export const findAllUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    return new Error(error);
  }
};

// Update user database service
export const updateUser = async (publicAddress, nonce) => {
  try {
    const user = await User.findOneAndUpdate({"address": publicAddress}, {"nonce": nonce});
    return user;
  } catch(error) {
    return new Error(error);
  }
}