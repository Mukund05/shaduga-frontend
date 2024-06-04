import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

export const createTask = createAsyncThunk(
  "tasks",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/tasks", data);
      return response;
    } catch (error) {
      console.error("Error during creating task: ", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState: { loading: false, success: false, error: false, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        (state.error = null),
          (state.success = false),
          (state.loading = true),
          (state.data = null);
      })
      .addCase(createTask.fulfilled, (state, action) => {
        (state.error = null),
          (state.success = true),
          (state.loading = false),
          (state.data = action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        (state.error = action.payload),
          (state.success = false),
          (state.loading = false),
          (state.data = null);
      });
  },
});
export default taskSlice.reducer;
