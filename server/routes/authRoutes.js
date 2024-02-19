import express from "express";
const router = express.Router();
import {
  register,
  login,
  currentUserController,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", authMiddleware, currentUserController);
export { router as authRoute };
