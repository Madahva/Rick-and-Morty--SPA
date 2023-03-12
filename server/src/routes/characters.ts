import { Router } from "express";
import {
  getAllCharactersHandler,
  getCharactersByNameHandler,
  getFiltersHandler,
  getCharactersByStatusHandler,
  getCharactersByGenderHandler,
  getCharactersBySpeciesHandler,
  getCharactersByTypeHandler,
} from "../handlers/charactersHandler";
import { fetchAllFiltersNameHandler } from "../handlers/filterHandler"
const router = Router();

router.get("/", getAllCharactersHandler);
router.get("/name/:name", getCharactersByNameHandler);
router.get("/filters", getFiltersHandler);
router.get("/status/:status", getCharactersByStatusHandler);
router.get("/gender/:gender", getCharactersByGenderHandler);
router.get("/species/:species", getCharactersBySpeciesHandler);
router.get("/type/:type", getCharactersByTypeHandler);

router.get("/filtersName", fetchAllFiltersNameHandler)

export default router;
