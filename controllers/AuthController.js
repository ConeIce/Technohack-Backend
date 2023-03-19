import User from "../models/User.js";
import bcrypt from "bcryptjs";
import passport from "passport";

export default {
  login: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.status(400).send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
        });
      }
    })(req, res, next);
  },
  register: async (req, res) => {
    console.log(req.body);

    try {
      const doc = await User.findOne({ username: req.body.username });
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          username: req.body.username,
          roomNumber: req.body.roomNumber,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    } catch (err) {
      throw err;
    }
  },
};
