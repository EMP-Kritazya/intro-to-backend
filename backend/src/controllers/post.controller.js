// CRUD API: Create, Read, Update, Delete

import { Post } from "../models/post.model.js";

// Create a Post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const post = await Post.create({ name, description, age });

    res.status(201).json({
      message: "Post Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      err: error,
    });
  }
};

export { createPost };
