import express from "express";
import {
  deleteDonarController,
  getDonarListController,
  getHospitalListController,
  getOrgListController,
} from "../controllers/adminController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);
// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
export { router as AdminRouter };
