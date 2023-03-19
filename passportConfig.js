import User from "./models/User.js";
import bcrypt from "bcryptjs";
import passportLocal from "passport-local";
const localStrategy = passportLocal.Strategy;

export default function (passport) {
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      } catch (err) {
        throw err;
      }
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findOne({ _id: id });
      cb(null, user);
    } catch (err) {
      throw err;
    }
  });
}
