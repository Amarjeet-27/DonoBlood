import express from "express";
import testController from "../controllers/testController.js";
// import { createMessageForDonarByOrg } from "../controllers/messageController.js";
const router = express.Router();
router.get("/", testController);

export default router;
