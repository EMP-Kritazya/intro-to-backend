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
    return res.status(500).json({
      message: "Internal Server Error",
      err: error,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

const updatePosts = async (req, res)=>{
  try{
    // basic validation to check if the body is empty
  }
}

const deletePosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log("Initial Posts: ", posts);

    await Post.deleteMany();

    const newPosts = await Post.find();
    console.log("Updated Posts: ", newPosts);

    res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Erorr",
      error,
    });
  }
};

export { createPost, getPosts, deletePosts };
