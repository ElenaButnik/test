import { createSlice } from "@reduxjs/toolkit";
import { getThunkData, addThunkData } from "./thunks";

export const usersListSlice = createSlice({
  name: "usersList",
  initialState: {
    users: [],
    page: 1,
    loading: false,
    error: null,
    status: "idle",
  },

  extraReducers: (builder) => {
    builder
      .addCase(getThunkData.pending, (state) => {
        state.loading = true;
        state.status = "pending";
      })

      .addCase(getThunkData.fulfilled, (state, action) => {
        state.users = [...action.payload.users];
        state.page = action.payload;
        state.loading = false;
        state.status = "fulfiled";
      })

      .addCase(getThunkData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = "rejected";
      })

      .addCase(addThunkData.pending, (state) => {
        state.loading = true;
        state.status = "pending";
      })

      .addCase(addThunkData.fulfilled, (state, action) => {
        state.users = [...action.payload.users, ...state.users];
        state.page = action.payload;
        state.loading = false;
        state.status = "fulfiled";
      })

      .addCase(addThunkData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = "rejected";
      });
  },
});

export default usersListSlice.reducer;
