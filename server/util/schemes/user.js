import Joi from "joi";
import { joiResponse } from "../../middlewares/validators";

export const registerValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(6).required(),
  });
  joiResponse(req, res, schema, next);
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required(),
  });
  joiResponse(req, res, schema, next);
};
