import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { bloodGroupDetailsController } from "../controllers/analyticsController.js";

const router = express.Router();
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);
export { router as AnalyticsRouter };
