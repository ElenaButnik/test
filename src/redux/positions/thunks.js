import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchPositions } from "../../services/API";

export const getThunkPositions = createAsyncThunk(
  "getPositionsList",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await FetchPositions(params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
