import Joi from "joi";
import { joiResponse } from "../../middlewares/validators";

export const blogValidator = (req, res, next) => {
  const schema = Joi.object({
    Author: Joi.string().required(),
    Title: Joi.string().min(5).max(25).required(),
    Content: Joi.string().min(10).required(),
  });
  joiResponse(req, res, schema, next);
};

export const QueryValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    message: Joi.string().required(),
  });
  joiResponse(req, res, schema, next);
};
