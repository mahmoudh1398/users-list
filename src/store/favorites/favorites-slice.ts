import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFavoriteUser } from "../../types/favorite-user.type";

const initialState: TFavoriteUser[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<string>) {
      state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { toggle } = favoritesSlice.actions;
export default favoritesSlice.reducer;
