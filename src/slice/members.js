import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

// Async thunk for creating a member
export const createMember = createAsyncThunk(
  "member/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/members", data);
      return response.data; // Ensure you're returning only the data part of the response
    } catch (error) {
      console.error("Error during creating member:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for deleting a member
export const deleteMember = createAsyncThunk(
  "member/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/members/${id}`);
      return response.data; // Ensure you're returning only the data part of the response
    } catch (error) {
      console.error("Error during deleting member:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state of the slice
const initialState = {
  members: [],
  loading: false,
  error: null,
};

// Create the slice
const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create member
      .addCase(createMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMember.fulfilled, (state, action) => {
        state.loading = false;
        state.members.push(action.payload); // Add the new member to the state
      })
      .addCase(createMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Delete member
      .addCase(deleteMember.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.loading = false;
        state.members = state.members.filter(
          (member) => member.id !== action.meta.arg // Remove the deleted member from the state
        );
      })
      .addCase(deleteMember.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default membersSlice.reducer;
