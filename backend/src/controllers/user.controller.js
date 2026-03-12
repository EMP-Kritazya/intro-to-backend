import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // basic validation
    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // check if user already exists
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // check password
    if (password.length < 8 || password.length > 50) {
      return res
        .status(400)
        .json({ message: "Password shall be between 8-50 characters" });
    }

    // create user
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });

    res.status(201).json({
      message: "User registered",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    // checking if the user already exists
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user)
      return res.status(400).json({
        message: "User not found",
      });

    // Compare passwords
    const isMatched = await user.comparePassword(password);
    if (!isMatched)
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    res.status(200).json({
      message: "User Logged In Successfully",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    res.status(200).json({
      message: "Logged Out Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export { registerUser, loginUser, logoutUser };
