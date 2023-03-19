import User from "./models/User.js";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import MongoDBStoreCreator from "connect-mongodb-session";
const MongoDBStore = MongoDBStoreCreator(session);
import passport from "passport";
import passportLocal from "passport-local";
import isLoggedIn from "./isLoggedIn.js";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";

await mongoose.connect(process.env.CONNECTION_URL);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

const store = new MongoDBStore({
  uri: process.env.CONNECTION_URL,
  collection: process.env.SESSION_STORE,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());
import passportConfig from "./passportConfig.js";
passportConfig(passport);

app.use("/auth", AuthRoute);
app.use("/user", isLoggedIn, UserRoute);

app.listen("3000", () => {
  console.log("Sever started at 3000");
});
