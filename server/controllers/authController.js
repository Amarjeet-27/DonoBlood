import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const register = async (req, res) => {
  try {
    const exisitingUser = await UserModel.findOne({ email: req.body.email });
    console.log(req.body.email);
    const email = req.body.email;
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already exists", 
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    //rest data
    const user = new UserModel(req.body);
    await user.save();

    return res.status(201).send({
      success: true,
      message: "User Registerd Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

// LOGIN controller

const login = async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "Invalid Credentials",
      });
    }
    if (existingUser.role !== req.body.role) {
      return res.status(500).send({
        success: false,
        message: "Role does not match",
      });
    }

    const comparePassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );

    if (!comparePassword) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      
    );
    res.status(200).send({
      success: true,
      message: "Login successfully",
      token,
      existingUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login API",
    });
  }
};

// GET CURRENT USER

const currentUserController = async (req, res) => {
  try {
    // this userId which is present in req is obtained from authMiddleware which as transfered by login 
    const user = await UserModel.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User fetched successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
    });
  }
};

export { register, login, currentUserController };
