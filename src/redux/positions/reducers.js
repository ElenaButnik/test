import { createSlice } from "@reduxjs/toolkit";
import { getThunkPositions } from "./thunks";

export const usersPositionsSlice = createSlice({
  name: "positions",
  initialState: {
    positions: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getThunkPositions.pending, (state) => {
        state.loading = true;
      })

      .addCase(getThunkPositions.fulfilled, (state, action) => {
        state.positions = action.payload.positions;
        state.loading = false;
      })

      .addCase(getThunkPositions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default usersPositionsSlice.reducer;
