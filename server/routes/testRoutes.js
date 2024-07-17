import express from "express";
import testController from "../controllers/testController.js";
const router = express.Router();
// console.log(router);
router.get("/", testController);

export default router;
