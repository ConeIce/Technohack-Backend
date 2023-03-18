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
app.get("/user", (req, res) => {
  console.log("Things be working just fine");
});
app.post("/user", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    roomNumber: req.body.roomNumber,
  });
  await newUser.save();
  res.send("User Created");
});
app.get("/user/id", (req, res) => {
  console.log("Things be working just fine");
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
