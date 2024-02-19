import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createInventoryController,
  getDonarsController,
  getHospitalController,
  getInventoryController,
  getInventoryHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getRecentInventoryController,
} from "../controllers/inventoryController.js";

const router = express.Router();

router.post("/create-inventory", authMiddleware, createInventoryController);
router.get("/get-inventory", authMiddleware, getInventoryController);
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);
router.get("/get-donars", authMiddleware, getDonarsController);
router.get("/get-hospitals", authMiddleware, getHospitalController);
router.get("/get-organisation", authMiddleware, getOrganisationController);
router.get(
  "/get-organisations-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);
export { router as InventoryRoute };
