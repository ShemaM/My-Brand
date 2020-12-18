import jwt from "jsonwebtoken";
import asyncHandler from "./async";
import errorResponse from "../util/errorResponse";
import User from "../modal/user";
import { config } from "dotenv";

config();

exports.protect = async (req, res, next) => {
  try {
    const token = req.headers.auth.split(" ")[1];

    if (!token) {
      return next(
        new errorResponse("Not authorized to access this route", 401)
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (err) {
    return next(new errorResponse("Not authorized to access this route", 401));
  }
};
