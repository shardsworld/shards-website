import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UiState {
  shards: number | null;
}

const initialState: UiState = {
  shards: null,
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
  },
});

export const { addShards, removeShards } = uiSlice.actions;

export const selectShards = (state: RootState) => state.ui.shards;

export default uiSlice.reducer;
