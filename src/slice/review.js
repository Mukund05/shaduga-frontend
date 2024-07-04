import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

// Thunks
export const allReviews = createAsyncThunk(
  "review/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/reviews");
      return response.data;
    } catch (error) {
      console.error("Error during fetching all reviews:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const userReview = createAsyncThunk(
  "review/user",
  async({userId,commId},{rejectWithValue}) => {
    try {
      const response = await axiosInstance.get(`/reviews/${userId}/${commId}`);
      return response.data
    } catch (error) {;
      console.error("Error during fetching user reviews:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
)

export const createReviews = createAsyncThunk(
  "review/create",
  async (reviewData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/reviews", reviewData);
      return response.data;
    } catch (error) {
      console.error("Error during creating a review:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  allReviews: { loading: false, success: false, data: null, error: null },
  createReviews: { loading: false, success: false, data: null, error: null },
};

// Slice
const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // allReviews
    builder
      .addCase(allReviews.pending, (state) => {
        state.allReviews.loading = true;
        state.allReviews.success = false;
        state.allReviews.error = null;
      })
      .addCase(allReviews.fulfilled, (state, action) => {
        state.allReviews.loading = false;
        state.allReviews.success = true;
        state.allReviews.data = action.payload;
        state.allReviews.error = null;
      })
      .addCase(allReviews.rejected, (state, action) => {
        state.allReviews.loading = false;
        state.allReviews.success = false;
        state.allReviews.error = action.payload;
        state.allReviews.data = null;
      });

    // createReviews
    builder
      .addCase(createReviews.pending, (state) => {
        state.createReviews.loading = true;
        state.createReviews.success = false;
        state.createReviews.error = null;
      })
      .addCase(createReviews.fulfilled, (state, action) => {
        state.createReviews.loading = false;
        state.createReviews.success = true;
        state.createReviews.data = action.payload;
        state.createReviews.error = null;
      })
      .addCase(createReviews.rejected, (state, action) => {
        state.createReviews.loading = false;
        state.createReviews.success = false;
        state.createReviews.error = action.payload;
        state.createReviews.data = null;
      });
  },
});

export default reviewSlice.reducer;
