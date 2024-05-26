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
    setShards: (state, action: PayloadAction<number | null>) => {
      state.shards = action.payload;
    },
  },
});

export const { setShards } = uiSlice.actions;

export const selectShards = (state: RootState) => state.ui.shards;

export default uiSlice.reducer;
