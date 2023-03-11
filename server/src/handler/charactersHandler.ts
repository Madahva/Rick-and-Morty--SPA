import { Request, Response as ExpressResponse } from "express";
import fetch, { Response as FetchResponse } from "node-fetch";

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
}

export const getCharacters = (req: Request, res: ExpressResponse) => {
  fetch("https://rickandmortyapi.com/api/character/")
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
        })
      );
      res.send(filteredData);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred");
    });
};

export async function searchCharacters(req: Request, res: ExpressResponse) {
  // Lógica de búsqueda
}

export async function filterCharacters(req: Request, res: ExpressResponse) {
  // Lógica de filtrado
}

export async function paginateCharacters(req: Request, res: ExpressResponse) {
  // Lógica de paginación
}

export async function getCharacterDetails(req: Request, res: ExpressResponse) {
  // Lógica de detalles de personaje
}
