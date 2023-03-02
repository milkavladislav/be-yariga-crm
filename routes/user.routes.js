import express from "express";

import {
  createUser,
  getUserById,
  getAllUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").post(getUserById);

export default router;
