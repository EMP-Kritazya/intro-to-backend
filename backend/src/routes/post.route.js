import { Router } from "express";
import {
  createPost,
  deletePosts,
  getPosts,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPosts);
router.route("/deletePosts").get(deletePosts);

export default router;
