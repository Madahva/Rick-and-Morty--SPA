import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Response, Pagination, Character } from "../../type";

const charactersURL: string = "http://localhost:4000/characters";

interface HomeState {
  pagination: Pagination;
  characters: Character[];
  characterDetails: Character;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: HomeState = {
  pagination: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  characters: [],
  characterDetails: {
    user: "",
    id: -1,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: "",
    location: "",
    image: "",
    episode: [],
  },
  status: "idle",
  error: undefined,
};

export const fetchCharacters = createAsyncThunk(
  "home/fetchCharacters",
  async () => {
    const response = await fetch(charactersURL);
    const data = await response.json();
    return data as Response;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pagination = action.payload.info;
        state.characters = action.payload.results;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPagination = (state: RootState) => state.homeReducer.pagination;
export const selectCharacters = (state: RootState) => state.homeReducer.characters;
export default homeSlice.reducer;
