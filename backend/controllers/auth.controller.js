import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "Compilare tutti i campi richiesti!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json( "Signup created successfully" );
  } catch (error) {
    // res.status(500).json({ message: "Error creating user" });
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (
    !email ||
    !password ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "Compilare tutti i campi richiesti!"));
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(401, "Invalid password"));
    }

    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc

    res.json(200).cookie("access_token", token, {httpOnly: true}).json(rest);
  } catch (error) {
    next(error);
  }

};
