import express from "express";
import router from "./routes/testRoutes.js";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import { authRoute } from "./routes/authRoutes.js";
import { InventoryRoute } from "./routes/inventoryRoutes.js";
import { AnalyticsRouter } from "./routes/analyticsRoute.js";
import { AdminRouter } from "./routes/adminRoute.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  return res.send({
    message: "This is testing page",
  });
});
app.use("/api/v1/test", router);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/inventory", InventoryRoute);
app.use("/api/v1/analytics", AnalyticsRouter);
app.use("/api/v1/admin", AdminRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT}`);
});
