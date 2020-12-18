import errorResponse from "../util/errorResponse";

export const joiResponse = (req, res, schema, next) => {
  const { error } = schema.validate(req.body);
  if (error)
    return next(
      new errorResponse(error.details[0].message.replace(/\"/g, ""), 400)
    );
  next();
};
