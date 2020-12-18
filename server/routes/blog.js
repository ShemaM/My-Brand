import express from "express";
import blog from "../controllers/blog";
import { blogValidator } from "../util/schemes/blog";
import { protect } from "../middlewares/auth";
import asyncHandler from "../middlewares/async";

/**
 * @swagger
 * /api/v1/blog:
 *   post:
 *     tags:
 *       - Blogs
 *     summary: creating a blog
 *     requestBody:
 *        required: true
 *        content:
 *           multipart/form-data:
 *              schema:
 *                 type: object
 *                 required:
 *                    - Author
 *                    - Title
 *                    - Content
 *                    - image
 *                 properties:
 *                    Author:
 *                      type: string
 *                    Title:
 *                      type: string
 *                    Content:
 *                      type: string
 *                    image:
 *                      type: string
 *                      format: binary
 *     responses:
 *       201:
 *             description: Blog saved successfully
 *       400:
 *             description: Bad request.
 * */

/**
 * @swagger
 * /api/v1/blog:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: Retrieve all blogs
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Blogs successfully Retrieved.
 * */

/**
 * @swagger
 * /api/v1/blog/{id}:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: retrieve single blog
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog id
 *     responses:
 *       200:
 *             description: Blog successfully Retrieved.
 *       404:
 *             description: Blog not found.
 *       500:
 *             description: server error.
 * */

/**
 * @swagger
 * /api/v1/blog/{id}/comments:
 *   post:
 *     tags:
 *       - Blogs
 *     name: comment
 *     summary: add a comment to a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                 type: string
 *                message:
 *                 type: string
 *     responses:
 *       201:
 *             description: Comment successfully added.
 *       400:
 *             description: Bad request.
 *       500:
 *             description: server error.
 * */

/**
 * @swagger
 * /api/v1/blog/{id}:
 *   patch:
 *     tags:
 *       - Blogs
 *     summary: Update a blog
 *     content:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *       - name: body
 *         in: body
 *         schema:
 *             properties:
 *                Author:
 *                 type: string
 *                Title:
 *                 type: string
 *                Content:
 *                 type: string
 *     responses:
 *       200:
 *             description: Blog successfully updated.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */

/**
 * @swagger
 * /api/v1/blog/{id}:
 *   delete:
 *     tags:
 *       - Blogs
 *     summary: Delete a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         in: header
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Successfully Deleted.
 *       400:
 *             description: Bad request.
 *       401:
 *             description: unauthorized
 * */

const router = express.Router();

router
  .route("/blog")
  .post(blogValidator, asyncHandler(blog.create))
  .get(asyncHandler(blog.getAll));

router
  .route("/blog/:id")
  .get(asyncHandler(blog.getOne))
  .patch(protect, asyncHandler(blog.update))
  .delete(protect, asyncHandler(blog.delete));

router.route("/blog/:id/comments").post(asyncHandler(blog.comment));

export default router;
