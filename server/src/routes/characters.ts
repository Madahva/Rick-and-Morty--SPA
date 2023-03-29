import { Router } from "express";
import {
  getAllCharactersHandler,
  getCharactersByNameHandler,
  getAllFiltersNameHandler,
  getFilteredCharactersHandler,
  getCharactersByIdHandler,
} from "../handlers/charactersHandler";
import { fetchAllApiFiltersNameHandler } from "../handlers/filterHandler";
const router = Router();

router.get("/", getAllCharactersHandler);
router.get("/name/:name", getCharactersByNameHandler);
router.get("/filtersName", getAllFiltersNameHandler);
router.get("/filter", getFilteredCharactersHandler)
router.get("/apiFiltersName", fetchAllApiFiltersNameHandler);
router.get("/:id",getCharactersByIdHandler);

export default router;
