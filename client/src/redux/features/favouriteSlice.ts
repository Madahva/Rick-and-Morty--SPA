import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Character } from "../../type";

const favouriteURL: string = "http://localhost:4000/favourite/";

interface Favourites {
  characters: Character[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: Favourites = {
  characters: [],
  status: "idle",
  error: undefined,
};

export const fetchFavourites = createAsyncThunk(
  "favourite/fetchFavourites",
  async (user: string | undefined) => {
    const newUrl: string = `${favouriteURL}${user}`;
    const response = await fetch(newUrl);
    return (await response.json()) as Character[];
  }
);

export const createFavourite = createAsyncThunk(
  "favourite/createFavourite",
  async (favourite) => {
    const response = await fetch(favouriteURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favourite),
    });
    return await response.json();
  }
);

export const deleteFavourite = createAsyncThunk(
  "favourite/deleteFavourite",
  async ({ user, id }: { user: string | undefined; id: string }) => {
    const newUrl: string = `${favouriteURL}${user}/${id}`;
    const response = await fetch(newUrl, {
      method: "DELETE",
    });
    return await response.json();
  }
);

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavourites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavourites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload;
      })
      .addCase(fetchFavourites.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(createFavourite.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createFavourite.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(createFavourite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(deleteFavourite.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteFavourite.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteFavourite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectFavourites = (state: RootState) =>
  state.favouriteReducer.characters;
export default favouriteSlice.reducer;
