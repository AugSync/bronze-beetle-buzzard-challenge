import { createSlice } from "@reduxjs/toolkit";
import { remove } from "lodash";

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      remove(
        state.favorites,
        (favorite) => favorite.url === action.payload.url
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
