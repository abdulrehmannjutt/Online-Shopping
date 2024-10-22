const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/productsRoutes');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/online-shopping");

const port = 3000;

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(port, () => {
  console.log("server is running at ", port);
});


app.use("/", userRoutes);

app.use("/admin", productRoutes)



















// bcrypt // hashing
// yup, joi, zod //validation library
//implement jwt //token

// controller ke andar bcrypt.. // not the best way
// mongodb has its own hooks, on pre-save, apply bcrypt.

// app.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const userExist = await UsersModel.findOne({ email: email });
//     console.log("user exist", userExist);
//     if (!userExist) {
//       const user = await UsersModel.create({ name, email, password });

//       res.status(201).json(user);
//     } else {
//       res.status(400).json("email already exist");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "signup error" });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await UsersModel.findOne({ email: email });

//     if (user) {
//       if (user.password === password) {
//         res.status(201).json(user);
//       } else {
//         res.status(400).json("the password is in correct");
//       }
//     } else {
//       res.status(404).json("record does not exist");
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "login error" });
//   }
// });
