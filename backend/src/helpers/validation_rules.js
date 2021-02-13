import Joi from '@hapi/joi';

// List of validation rules
export const validationRules = {
  publicAddress: Joi.string().required().min(40).trim(),
  signature: Joi.string().required().trim()
};