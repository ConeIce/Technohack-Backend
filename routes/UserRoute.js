import express from "express";
import controller from "../controllers/UserController.js";

const router = express.Router();

router.get("/", (req, res) => {
  controller.get(req, res);
});
router.get("/all", (req, res) => {
  controller.getAll(req, res);
});

router.post("/", (req, res) => {
  if (req.query.location) {
    controller.postLocation(req, res);
  } else if (req.query.available) {
    controller.postAvailable(req, res);
  }
});

export default router;
