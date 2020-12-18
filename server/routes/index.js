import { Router } from "express";
import blogRoutes from "./blog";
import queryRoutes from "./query";
import userRoutes from "./user";
import welcome from "../controllers/welcome";
import docRouter from "../documentation/index";

const router = Router();

router.use("/api/v1", blogRoutes);
router.use("/api/v1", queryRoutes);
router.use("/api/v1", userRoutes);
router.get("/", welcome.greeting);
router.use("/api/v1/documentation", docRouter);

router.use("*", (req, res) => {
  res.status(404).json({ success: false, msg: "route not found" });
});

export default router;
