import express from "express";
import controller from "../controllers/AuthController.js";

const router = express.Router();

router.post("/login", (req, res) => {
  controller.login(req, res);
});

router.post("/register", (req, res) => {
  controller.register(req, res);
});

export default router;
