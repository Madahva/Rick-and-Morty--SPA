import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Response, Pagination, Character, FilterNames } from "../../type";

const charactersURL: string = "http://localhost:4000/characters";
const filterNames: string = "http://localhost:4000/characters/filtersName";
const filterURL: string = "http://localhost:4000/characters/filter";

interface HomeState {
  pagination: Pagination;
  characters: Character[];
  characterDetails: Character;
  filterNames: FilterNames;
  filteredCharacters: Character[];
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
  filterNames: {
    gender: [],
    status: [],
    species: [],
    type: [],
  },
  filteredCharacters: [],
  status: "idle",
  error: undefined,
};

export const fetchCharacters = createAsyncThunk(
  "home/fetchCharacters",
  async () => {
    const response = await fetch(charactersURL);
    return (await response.json()) as Response;
  }
);

export const fetchFilterNames = createAsyncThunk(
  "filter/fetchFilterNames",
  async () => {
    const response = await fetch(filterNames);
    return (await response.json()) as FilterNames;
  }
);

export const fetchFilteredCharacters = createAsyncThunk(
  "filter/fetchFilteredCharacters",
  async (filters: string) => {
    const newUrl: string = `${filterURL}/?${filters}`;
    const response = await fetch(newUrl);
    return (await response.json()) as Response;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    clearFilteredCharacters: (state) => {
      state.filteredCharacters = [];
      state.pagination = {
        count: 0,
        pages: 0,
        next: "",
        prev: "",
      };
    },
  },
  extraReducers: (builder) => {
    const commonPendingAction = (state: any) => {
      state.status = "loading";
    };
    const commonFulfilledAction = (state: any, action: any) => {
      state.status = "succeeded";
    };
    const commonRejectedAction = (state: any, action: any) => {
      state.status = "failed";
      state.error = action.error.message;
    };

    builder
      .addCase(fetchCharacters.pending, commonPendingAction)
      .addCase(fetchFilterNames.pending, commonPendingAction)
      .addCase(fetchFilteredCharacters.pending, commonPendingAction)
      .addCase(fetchCharacters.rejected, commonRejectedAction)
      .addCase(fetchFilterNames.rejected, commonRejectedAction)
      .addCase(fetchFilteredCharacters.rejected, commonRejectedAction)

      .addCase(fetchCharacters.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.characters = action.payload.results;
      })
      .addCase(fetchFilterNames.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.filterNames = action.payload;
      })

      .addCase(fetchFilteredCharacters.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.pagination = action.payload.info;

        action.payload.results &&
          action.payload.results.forEach((character) => {
            if (!characterExists(state.filteredCharacters, character)) {
              state.filteredCharacters.push(character);
            }
          });
      });
  },
});

function characterExists(array: any, character: any) {
  return array.some((c: any) => c.id === character.id);
}

export const selectPagination = (state: RootState) =>
  state.homeReducer.pagination;
export const selectCharacters = (state: RootState) =>
  state.homeReducer.characters;
export const selectFilterNames = (state: RootState) =>
  state.homeReducer.filterNames;
export const selectFilteredCharacters = (state: RootState) =>
  state.homeReducer.filteredCharacters;
export const { clearFilteredCharacters } = homeSlice.actions;
export default homeSlice.reducer;
