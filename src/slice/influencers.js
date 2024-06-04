import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

// Thunks
export const getUser = createAsyncThunk(
  "users/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error during getting user details:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error during deleting user details:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, userData }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error("Error during updating user details:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Helper function to handle common cases
const createAsyncReducers = (builder, thunk, stateKey) => {
  builder
    .addCase(thunk.pending, (state) => {
      state[stateKey].loading = true;
      state[stateKey].success = false;
      state[stateKey].error = null;
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state[stateKey].loading = false;
      state[stateKey].success = true;
      state[stateKey].data = action.payload;
      state[stateKey].error = null;
    })
    .addCase(thunk.rejected, (state, action) => {
      state[stateKey].loading = false;
      state[stateKey].success = false;
      state[stateKey].error = action.payload;
      state[stateKey].data = null;
    });
};

// Slice
const influencerSlice = createSlice({
  name: "influencers",
  initialState: {
    getUser: { loading: false, success: false, data: null, error: null },
    deleteUser: { loading: false, success: false, data: null, error: null },
    updateUser: { loading: false, success: false, data: null, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    createAsyncReducers(builder, getUser, "getUser");
    createAsyncReducers(builder, deleteUser, "deleteUser");
    createAsyncReducers(builder, updateUser, "updateUser");
  },
});

export default influencerSlice.reducer;
