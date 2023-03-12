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

interface FilterNames {
  gender: string[];
  status: string[];
  species: string[];
  type: string[];
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

export function getFilteredCharactersHandler(
  req: Request,
  res: ExpressResponse
) {
  const filter: any = req.query;
  const apiUrl = `${apiURL}?${Object.entries(filter)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")}`;

  fetch(apiUrl)
    .then((response: FetchResponse) => response.json() as Promise<Character>)
    .then((data: Character) => res.send(data))
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred 😕");
    });
}

export function getAllFiltersNameHandler(req: Request, res: ExpressResponse) {
  const filtersName: FilterNames = {
    gender: ["Male", "Female", "unknown", "Genderless"],
    status: ["Alive", "unknown", "Dead"],
    species: [
      "Human",
      "Alien",
      "Humanoid",
      "unknown",
      "Poopybutthole",
      "Mythological Creature",
      "Animal",
      "Robot",
      "Cronenberg",
      "Disease",
    ],
    type: [
      "",
      "Genetic experiment",
      "Superhuman (Ghost trains summoner)",
      "Parasite",
      "Human with antennae",
      "Human with ants in his eyes",
      "Fish-Person",
      "Cromulon",
      "Self-aware arm",
      "Cat-Person",
      "Human with baby legs",
      "Bepisian",
      "Hivemind",
      "Mytholog",
      "Human with giant head",
      "Dog",
      "Bird-Person",
      "Korblock",
      "Boobloosian",
      "Elephant-Person",
      "Superhuman",
      "Gromflomite",
      "Centaur",
      "Organic gun",
      "Microverse inhabitant",
      "Vampire",
      "Light bulb-Alien",
      "Animal",
      "Robot-Crocodile hybrid",
      "Zigerion",
      "Giant",
      "Cone-nippled alien",
      "Demon",
      "Shapeshifter",
      "Game",
      "Amoeba-Person",
      "Cronenberg",
      "Clone",
      "Robot",
      "Interdimensional gaseous being",
      "Flansian",
      "Zombodian",
      "Garblovian",
      "Gazorpian",
      "Eat shiter-Person",
      "Goddess",
      "Gazorpian reproduction robot",
      "Hammerhead-Person",
      "Hole",
      "Tuskfish",
      "Alphabetrian",
      "Cat",
      "Time God",
      "Unknown-nippled alien",
      "Krootabulan",
      "Plutonian",
      "Jellybean",
      "Tentacle alien",
      "Miniverse inhabitant",
      "Cyborg",
      "Larva alien",
      "Snail alien",
      "Tinymouth",
      "Lizard-Person",
      "Alligator-Person",
      "Monster",
      "Conjoined twin",
      "Sentient ant colony",
      "Human Gazorpian",
      "Boobie buyer reptilian",
      "Meeseeks",
      "The Devil",
      "Cat controlled dead lady",
      "Numbericon",
      "Octopus-Person",
      "Hairy alien",
      "Pickle",
      "Bread",
      "Mega Gargantuan",
      "Rat",
      "Gear-Person",
      "Blue ape alien",
      "Ring-nippled alien",
      "Lobster-Alien",
      "Scrotian",
      "Shimshamian",
      "Omniscient being",
      "Slug",
      "Stair goblin",
      "Leprechaun",
      "Morty's toxic side",
      "Rick's toxic side",
      "Traflorkian",
      "Teenyverse inhabitant",
      "Trunk-Person",
      "Tumblorkian",
      "Chair",
      "Drumbloxian",
      "Floop Floopian",
      "Greebybobe",
      "Corn-person",
      "Phone-Person",
      "Teddy Bear",
      "Little Human",
      "Mexican",
      "Giant Cat Monster",
      "Old Amazons",
      "Mannie",
      "Necrophiliac",
      "Eel",
      "Pizza",
      "Grandma",
      "Phone",
      "Doopidoo",
      "Pripudlian",
      "Nano Alien",
      "Human with a flower in his head",
      "Hologram",
      "Shrimp",
      "Caterpillar",
      "Wasp",
      "Toy",
      "Monogatron",
      "Lizard",
      "Fly",
      "God",
      "Dummy",
      "Human with tusks",
      "Gramuflackian",
      "Dragon",
      "Snake",
      "Human-Snake hybrid",
      "Soulless Puppet",
      "Half Soulless Puppet",
      "Glorzo",
      "Planet",
      "Zeus",
      "Clay-Person",
      "Sexy Aquaman",
      "Narnian",
      "Starfish",
      "Squid",
      "Decoy",
      "Whenwolf",
      "Summon",
      "Morglutzian",
      "Weasel",
      "Super Sperm Monster",
      "CHUD",
      "Giant Incest Baby",
      "CHUD Human Mix",
      "Changeformer",
      "Artificial Intelligence",
      "Guinea Pig for the Polio Vaccine",
      "Turkey",
      "Turkey Human Mix",
      "Anime",
      "Memory",
      "Bird-Person Human Mix",
      "Crow",
      "Cookie",
      "Normal Size Bug",
      "Slartivartian",
      "Ferkusian",
      "Mascot",
      "Scarecrow",
      "Tiger",
      "Crow Horse",
      "Ferret Robot",
      "Passing Butter Robot",
    ],
  };

  res.send(filtersName);
}
