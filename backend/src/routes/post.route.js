import { Router } from "express";
import {
  createPost,
  deletePosts,
  getPosts,
  updatePosts,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPosts);
router.route("/deletePosts/:id").get(deletePosts);
router.route("/update/:id").patch(updatePosts);

export default router;
