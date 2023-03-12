import fetch, { Response as FetchResponse } from "node-fetch";
import { Request, Response } from "express";

const API_BASE_URL = "https://rickandmortyapi.com/api/character";

async function fetchAllCharacters(): Promise<any[]> {
  const characters: any[] = [];
  let response: FetchResponse;

  let nextPageUrl = API_BASE_URL;
  while (nextPageUrl) {
    response = await fetch(nextPageUrl);
    const data = await response.json();
    characters.push(...data.results);
    nextPageUrl = data.info.next;
  }

  return characters;
}

export async function fetchAllFiltersNameHandler(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const characters = await fetchAllCharacters();
    console.log("Ya tengo a todos los personajes.")
    const genders = [...new Set(characters.map((c) => c.gender))];
    const statuses = [...new Set(characters.map((c) => c.status))];
    const types = [...new Set(characters.map((c) => c.type))];
    const species = [...new Set(characters.map((c) => c.species))];

    const data = {
      gender: genders,
      status: statuses,
      type: types,
      species: species,
    };

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los filtros de personajes.");
  }
}
