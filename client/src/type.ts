export interface Response {
  info: Pagination;
  results: Character[];
  error: string;
}

export interface Pagination {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface Character {
  user: string;
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episode: string[];
}

export interface FilterNames {
  gender: string[];
  status: string[];
  species: string[];
  type: string[];
}
