import express from "express";
import "@babel/polyfill";
import { config } from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db";
import fileupload from "express-fileupload";
import cookieParser from "cookie-parser";
import routes from "./routes/index";
import errorHandler from "./middlewares/error";

config();
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(fileupload({ useTempFiles: true }));

app.use("/", routes);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} at ${process.env.PORT}`
  )
);

export default app;
