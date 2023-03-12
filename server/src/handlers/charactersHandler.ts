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

export async function getCharactersByNameHandler(
  req: Request,
  res: ExpressResponse
) {}

export async function getFiltersHandler(req: Request, res: ExpressResponse) {}

export async function getCharactersByStatusHandler(
  req: Request,
  res: ExpressResponse
) {}

export async function getCharactersByGenderHandler(
  req: Request,
  res: ExpressResponse
) {}

export async function getCharactersBySpeciesHandler(
  req: Request,
  res: ExpressResponse
) {}

export async function getCharactersByTypeHandler(
  req: Request,
  res: ExpressResponse
) {}
