import jwt from 'jsonwebtoken';
import { SECRET_KEY, EXPIRATION_DURATION } from '../config/index';

// Generate jwt token
export const generateToken = async (data, options = { expiresIn: EXPIRATION_DURATION }) => {
  const token = await jwt.sign({ key: data }, SECRET_KEY, options);
  return token;
};

// Verify jwt token
export const verifyToken = token => jwt.verify(token, SECRET_KEY);

// Format jwt error message
export const formatJwtErrorMessage = (message) => {
  let formattedMessage;
  if (message.includes('invalid') || message.includes('malformed')) {
    formattedMessage = 'Session is invalid. Signin to continue';
  }
  if (message.includes('expired')) {
    formattedMessage = 'Session has expired. Signin to continue';
  }
  return formattedMessage;
};