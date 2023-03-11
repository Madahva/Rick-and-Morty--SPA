import { Router } from "express";
import { getCharacters, searchCharacters, filterCharacters, paginateCharacters, getCharacterDetails } from "../handler/charactersHandler";
const router = Router();

router.get('/', getCharacters);
router.get('/search', searchCharacters);
router.get('/filter', filterCharacters);
router.get('/page/:pageNumber', paginateCharacters);
router.get('/character/:id', getCharacterDetails);


export default router;
