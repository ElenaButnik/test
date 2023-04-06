import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchUsers, createUser } from "../../services/API";

export const getThunkData = createAsyncThunk(
  "getUsersList",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await FetchUsers(params);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addThunkData = createAsyncThunk(
  "addUser",
  async (params, { rejectWithValue }) => {
    try {
      const response = await createUser(params);
      return response.params;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
