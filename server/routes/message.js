import express from "express";
// import authMiddleware from "../middleware/authMiddleware.js";
import {
  createMessageForDonarByOrg,
  createMessageForOrgByHospital,
  getMessageFromHospital,
  getMessageFromOrg,
  getPreviousReqByHospital,
  getPreviousReqByOrg,
} from "../controllers/messageController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();
router.get("/get-messagefrom-org", authMiddleware, getMessageFromOrg);
router.get("/get-messagefrom-hospital", authMiddleware, getMessageFromHospital);
router.get("/get-previousReqBy-org", authMiddleware, getPreviousReqByOrg);
router.get(
  "/get-previousReqBy-hospital",
  authMiddleware,
  getPreviousReqByHospital
);
router.post(
  "/create-messagefor-donar",
  authMiddleware,
  createMessageForDonarByOrg
);
router.post(
  "/create-messagefor-org",
  authMiddleware,
  createMessageForOrgByHospital
);

export { router as MessageRouter };
