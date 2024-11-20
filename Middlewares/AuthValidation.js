const Joi = require("joi");
const jwt = require("jsonwebtoken");
const UserModal = require("../Modals/user");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required().messages({
      "string.empty": "First name is required",
      "string.min": "First name must be at least 2 characters long",
      "string.max": "First name must be less than 50 characters",
    }),
    lastName: Joi.string().min(2).max(50).required().messages({
      "string.empty": "Last name is required",
      "string.min": "Last name must be at least 2 characters long",
      "string.max": "Last name must be less than 50 characters",
    }),
    // name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
    // confirmPassword: Joi.string()
    //   .valid(Joi.ref("password"))
    //   .required()
    //   .messages({
    //     "any.only": "Password and confirm password do not match",
    //   }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
  next();
};
const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: "Invalid credentials. Please try again.", error });
  }
  next();
};

const authenticateUser = async (req, res, next) => {

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ message: "Invalid or expired token, Please sign in again!" });
    }
    const user = await UserModal.findOne({ _id: decoded?._id });
    if (!user) {
      res.clearCookie("token");
      return res
        .status(404)
        .json({ message: "User not found, please signup again!" }); // User not found in the database.
    }
    req.user = { _id: decoded._id };
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = {
  signupValidation,
  loginValidation,
  authenticateUser,
};
