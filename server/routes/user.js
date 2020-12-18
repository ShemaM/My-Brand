import express from "express";
import user from "../controllers/user";
import asyncHandler from "../middlewares/async";
import { registerValidator, loginValidator } from "../util/schemes/user";

/**
 * @swagger
 * /api/v1/user/register:
 *   post:
 *     tags:
 *       - Users
 *     name: Signup
 *     summary: Creates a new user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                 type: string
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *     responses:
 *       201:
 *             description: user created successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already in the system.
 * */

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     tags:
 *       - Users
 *     name: Signin
 *     summary: login a user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *     responses:
 *       201:
 *             description: user created successfully.
 *       400:
 *             description: Bad request.
 *       409:
 *             description: The email is already in the system.
 * */

const router = express.Router();

router
  .route("/user/register")
  .post(registerValidator, asyncHandler(user.register));
router.route("/user/login").post(loginValidator, asyncHandler(user.login));

export default router;
