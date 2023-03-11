import { Router } from "express";
import userRoutes from "./user";
import charactersRoutes from "./characters";

const router = Router();

router.use("/user", userRoutes);
router.use("/characters", charactersRoutes);

export default router;
