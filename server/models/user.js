const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const saltRounds = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, saltRounds);
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.generateToken = async function () {
    return jwt.sign(
      {
        userId: this._id.toString(),
        name: this.name,
        email: this.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
  };
  

const UsersModel = mongoose.model("users", UserSchema);

module.exports = UsersModel;
