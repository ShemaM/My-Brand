import mongoose from "mongoose";
import dotenv from "dotenv";
import { config } from "dotenv";
import asyncHandler from "../middlewares/async";

config();

const { MONGO_URI, NODE_ENV, MONGO_URI_TEST } = process.env;

const connectDB = asyncHandler(async () => {
  const conn = await mongoose.connect(
    NODE_ENV === "test" ? MONGO_URI_TEST : MONGO_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  console.log(`MongoDB Connected: ${conn.connection.host}`);
});

export default connectDB;
