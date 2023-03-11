import { Router } from "express";
import {
  getAllCharactersHandler,
  getCharactersByIdHandler,
  getCharactersByNameHandler,
  getFiltersHandler,
  getCharactersByStatusHandler,
  getCharactersByGenderHandler,
  getCharactersBySpeciesHandler,
  getCharactersByTypeHandler,
} from "../handlers/charactersHandler";
const router = Router();

router.get("/", getAllCharactersHandler);
router.get("/:id", getCharactersByIdHandler);
router.get("/name/:name", getCharactersByNameHandler);
router.get("/filters", getFiltersHandler);
router.get("/status/:status", getCharactersByStatusHandler);
router.get("/gender/:gender", getCharactersByGenderHandler);
router.get("/species/:species", getCharactersBySpeciesHandler);
router.get("/type/:type", getCharactersByTypeHandler);

export default router;
