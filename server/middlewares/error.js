import errorResponse from "../util/errorResponse";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId

  if (err.name === "CastError") {
    const message = `No id found with id of ${err.value}`;
    error = new errorResponse(message, 404);
  }

  // Mongoose Duplicate Key
  if (err.code === 11000) {
    const message = "Duplicate field Value Entered";
    error = new errorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server error",
  });
};

export default errorHandler;
