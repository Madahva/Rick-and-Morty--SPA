import { Router } from "express";
import {
  getFavouriteHandler,
  addFavouriteHandler,
  deleteFavouriteHandler,
} from "../handlers/favouriteHandler";

const router = Router();

router.get("/:user", getFavouriteHandler);
router.post("/", addFavouriteHandler);
router.delete("/:user/:cardId", deleteFavouriteHandler);

export default router;
