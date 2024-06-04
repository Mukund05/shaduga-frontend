import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

export const leaderBoard = createAsyncThunk(
  "leaderboard/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`leader-boards/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error during Leaderboard:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const LeaderBoardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(leaderBoard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(leaderBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(leaderBoard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default LeaderBoardSlice.reducer;
