import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UiState {
  shards: number | null;
  showAllCards: boolean;
}

const initialState: UiState = {
  shards: null,
  showAllCards: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addShards: (state, action: PayloadAction<number>) => {
      state.shards = state.shards
        ? state.shards + action.payload
        : action.payload;
    },
    removeShards: (state, action: PayloadAction<number>) => {
      state.shards = state.shards ? state.shards - action.payload : 0;
    },
    showAllCards: (state) => {
      state.showAllCards = true;
    },
  },
});

export const { addShards, removeShards, showAllCards } = uiSlice.actions;

export const selectShards = (state: RootState) => state.ui.shards;

export const selectShowAllCards = (state: RootState) => state.ui.showAllCards;

export default uiSlice.reducer;
