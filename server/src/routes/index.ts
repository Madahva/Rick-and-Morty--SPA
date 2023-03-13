import { Router } from "express";
import charactersRoutes from "./characters";
import favouriteRoutes from "./favourite";

const router = Router();

router.use("/characters", charactersRoutes);
router.use("/favourite", favouriteRoutes);

export default router;
