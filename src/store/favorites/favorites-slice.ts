import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFavoriteUser } from "@/types/favorite-user.type";

const initialState: TFavoriteUser[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggle(state, action: PayloadAction<TFavoriteUser>) {
      const isFavorite = state.some((user) => user.id === action.payload.id);
      if (isFavorite) {
        return state.filter((user) => user.id !== action.payload.id);
      } else {
        return [...state, { ...action.payload, isFavorite: true }];
      }
    },
  },
});

export const { toggle } = favoritesSlice.actions;
export default favoritesSlice.reducer;
