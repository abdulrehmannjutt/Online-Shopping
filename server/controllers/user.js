const UsersModel = require("../models/user");
const bcrypt = require("bcrypt");
const yup = require("yup");

const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, "Name can only contain letters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#]).+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isAdmin = false;
    await signUpSchema.validate(
      { name, email, password },
      { abortEarly: false }
    );

    const userExist = await UsersModel.findOne({ email: email });
    console.log("user exist", userExist);
    if (!userExist) {
      const user = await UsersModel.create({ name, email, password, isAdmin });

      if(user){ 
        const findUser = await UsersModel.findOne({email: email});
        console.log("fined user", findUser);
        const token = await findUser.generateToken();
        console.log("token", token);
        if (findUser) {
          const isMatch = await bcrypt.compare(password, findUser.password);
          console.log("is match", isMatch);

          if (isMatch) {
            res.status(201).json({token});  
          } else {
            res.status(400).json("the password is in correct");
          }
        } else {
          res.status(404).json("record does not exist");
        }
      } 

    } else {
      res.status(400).json("email already exist");
    }
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: "signup error" });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email: email });

    const token = await user.generateToken()

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      const isAdmin = user.isAdmin;
      if (isMatch) {
        res.status(200).json({token, isAdmin});
      } else {
        res.status(400).json("the password is in correct");
      }
    } else {
      res.status(404).json("record does not exist");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "login error" });
  }
};

module.exports = { signUp, logIn };
