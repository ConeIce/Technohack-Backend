import User from "./models/User.js";
import express from "express";
import mongoose from "mongoose";
mongoose.connect(
  "mongodb+srv://joeljohn:joeljohn1234@cluster0.qpazsri.mongodb.net/?retryWrites=true&w=majority"
);
const app = express();
//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.get("/user", async (req, res) => {
  const teachers = await User.find();
  res.json(teachers);
});
app.post("/user", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    roomNumber: req.body.roomNumber,
  });
  await newUser.save();
  res.send("User Created");
});
app.get("/user/:id", async (req, res) => {
  const teacher = await User.findOne({
    _id: req.params.id,
  }).exec();
  res.json(teacher);
});
app.post("/user?location", (req, res) => {
  console.log("Things be working just fine");
});
app.post("/user?available", (req, res) => {
  console.log("Things be working just fine");
});

app.listen("3000", () => {
  console.log("Sever started at 3000");
});
