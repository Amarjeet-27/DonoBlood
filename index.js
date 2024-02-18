// import express from "express";
// import router from "./routes/testRoutes.js";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import { authRoute } from "./routes/authRoutes.js";
// import { InventoryRoute } from "./routes/inventoryRoutes.js";
// import { AnalyticsRouter } from "./routes/analyticsRoute.js";

// dotenv.config();
// connectDB();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// app.use("/api/v1/test", router);
// app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/inventory", InventoryRoute);
// app.use("/api/v1/analytics", AnalyticsRouter);

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on  ${PORT}`);
// });
