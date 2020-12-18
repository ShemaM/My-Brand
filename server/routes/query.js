import express from "express";
import query from "../controllers/query";
import asyncHandler from "../middlewares/async";
import { QueryValidator } from "../util/schemes/blog";

/**
 * @swagger
 * /api/v1/query:
 *   post:
 *     tags:
 *       - Queries
 *     name: Query
 *     summary: Creates query
 *     consumes:
 *        - multipart/form-data
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                   type: string
 *                   in: formData
 *                email:
 *                   type: string
 *                   in: formData
 *                message:
 *                   type: string
 *                   in: formData
 *     responses:
 *       201:
 *             description: query successfully Created.
 *       400:
 *             description: Bad request.
 * */

/**
 * @swagger
 * /api/v1/query:
 *   get:
 *     tags:
 *       - Queries
 *     name: Query
 *     summary: Retrieve all queries
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Queries successfully Retrieved.
 * */

/**
 * @swagger
 * /api/v1/query/{id}:
 *   delete:
 *     tags:
 *       - Queries
 *     name: Query
 *     summary: delete one query
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Queries successfully deleted.
 * */

const router = express.Router();

router
  .route("/query")
  .post(QueryValidator, asyncHandler(query.create))
  .get(asyncHandler(query.getAll));

router.route("/query/:id").delete(asyncHandler(query.delete));

export default router;
