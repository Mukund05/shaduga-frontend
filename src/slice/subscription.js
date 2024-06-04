import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

export const subscription = createAsyncThunk(
  "subscription",
  async (_, { rejectWithValue }) => {
    try {
      const response = axiosInstance.get("/subscriptions");
      return response;
    } catch (error) {
      console.error("Error during subscription:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const createSubscription = createAsyncThunk(
  "subscription",
  async (data, { rejectWithValue }) => {
    try {
      const response = axiosInstance.post("/subscriptions", data);
      return response;
    } catch (error) {
      console.error("Error during create subscription:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const subscriptionSlice = createSlice({
  name: "subscription",
  reducers: {},
  initialState: {
    loading: false,
    error: null,
    subscriptionData: null,
    success: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(subscription.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(subscription.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = null;
        state.subscriptionData = action.payload;
      })
      .addCase(subscription.pending, (state) => {
        state.success = false;
        state.loading = false;
        state.error = action.payload;
        state.subscriptionData = null;
      });
    builder
      .addCase(createSubscription.pending, (state) => {
        state.success = false;
        state.loading = true;
        state.error = null;
      })
      .addCase(createSubscription.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = null;
        state.subscriptionData = action.payload;
      })
      .addCase(createSubscription.pending, (state) => {
        state.success = false;
        state.loading = false;
        state.error = action.payload;
        state.subscriptionData = null;
      });
  },
});
export default subscriptionSlice.reducer;
