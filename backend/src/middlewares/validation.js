import Joi from '@hapi/joi';
import { respondWithWarning, joiValidator, validationRules } from '../helpers/index';

// Input validation
// This is used to validate the input for signup 
// and fetch user by address routes
export const inputValidation = (req, res, next) => {
  const inputSchema = Joi.object().keys({
    address: validationRules.publicAddress
  });

  let validationPath = req.body

  if (validationPath.publicAddress == "") {
    validationPath == req.param
  }
  const errors = joiValidator(validationPath, inputSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad request', errors);
};

// signin validation
export const signInValidation = (req, res, next) => {
  const signInSchema = Joi.object().keys({
    publicAddress: validationRules.publicAddress,
    signature: validationRules.signature
  });

  const errors = joiValidator(req.body, signInSchema);
  if (!errors) {
    return next();
  }
  return respondWithWarning(res, 400, 'Bad request', errors);
};
