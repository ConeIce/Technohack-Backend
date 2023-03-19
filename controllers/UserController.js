import User from "../models/User.js";

export default {
  get: async (req, res) => {
    res.send(req.user);
  },
  getAll: async (req, res) => {
    const users = await User.find();
    console.log(users);
    res.json(users);
  },
  postLocation: async (req, res) => {
    const user = await User.findOne({ _id: req.user.id });
    user.location = req.query.location;
    await user.save();
    res.send({ message: "location updated" });
  },
  postAvailable: async (req, res) => {
    const user = await User.findOne({ _id: req.user.id });
    user.available = req.query.available;
    await user.save();
    res.send({ message: "available updated" });
  },
};
