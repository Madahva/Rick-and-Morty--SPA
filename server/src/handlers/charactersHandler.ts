import { Request, Response as ExpressResponse, response } from "express";
import fetch, { Response as FetchResponse } from "node-fetch";

const apiURL: string = "https://rickandmortyapi.com/api/character/";

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  image: string;
  episode: string[];
}

export const getAllCharactersHandler = (req: Request, res: ExpressResponse) => {
  fetch(apiURL)
    .then((response: FetchResponse) => response.json() as Promise<ApiResponse>)
    .then((data: ApiResponse) => {
      const filteredData = data.results.map(
        ({
          id,
          name,
          status,
          species,
          type,
          gender,
          origin: { name: originName },
          location: { name: locationName },
          image,
          episode,
        }) => ({
          id,
          name,
          status,
          species,
          type,
          gender,
          origin: originName,
          location: locationName,
          image,
          episode,
        })
      );
      res.send({ ...data, results: filteredData });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred 😕");
    });
};

export function getCharactersByNameHandler(req: Request, res: ExpressResponse) {
  const name: string = req.params.name;
  fetch(`${apiURL}/?name=${name}`)
    .then((response: FetchResponse) => response.json() as Promise<Character>)
    .then((data: Character) => res.send(data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred 😕");
    });
}

export function getFiltersHandler(req: Request, res: ExpressResponse) {}

export function getCharactersByStatusHandler(
  req: Request,
  res: ExpressResponse
) {
  const status: string = req.params.status;
  fetch(`${apiURL}/?status=${status}`)
    .then((response: FetchResponse) => response.json() as Promise<Character>)
    .then((data: Character) => res.send(data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred 😕");
    });
}

export function getCharactersByGenderHandler(
  req: Request,
  res: ExpressResponse
) {}

export function getCharactersBySpeciesHandler(
  req: Request,
  res: ExpressResponse
) {}

export function getCharactersByTypeHandler(
  req: Request,
  res: ExpressResponse
) {}
