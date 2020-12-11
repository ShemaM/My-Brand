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