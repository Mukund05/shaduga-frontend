import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

// Async thunk for getting all quests
export const allQuest = createAsyncThunk(
  "quest/allQuest",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/quests");
      return response.data; // Ensure you're returning only the data part of the response
    } catch (error) {
      console.error("Error during getting all quests:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for creating a quest
export const createQuest = createAsyncThunk(
  "quest/createQuest",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/quests", data);
      console.log("Success", response);
      return response.data;
      // Ensure you're returning only the data part of the response
    } catch (error) {
      console.error("Error during creating quest:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for deleting a quest
export const deleteQuest = createAsyncThunk(
  "quest/deleteQuest",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/quests/${id}`);
      return response.data; // Ensure you're returning only the data part of the response
    } catch (error) {
      console.error("Error during deleting quest:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for Quest by Module
export const questByModule = createAsyncThunk(
  "quest/questbymodule",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/quests/${id}`);
      return response.data; // Ensure you're returning only the data part of the response
    } catch (error) {
      console.error("Error during deleting quest:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating a quest
export const updateQuest = createAsyncThunk(
  "quest/updateQuest",
  async ({ id, datas }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/quests/${id}`, datas);
      return response.data;
    } catch (error) {
      console.error("Error during updating quest:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

// Define the initial state of the slice
const initialState = {
  quests: [],
  loading: false,
  error: null,
};

// Create the slice
const questSlice = createSlice({
  name: "quest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all quests
      .addCase(allQuest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(allQuest.fulfilled, (state, action) => {
        state.loading = false;
        state.quests = action.payload;
      })
      .addCase(allQuest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Create quest
      .addCase(createQuest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuest.fulfilled, (state, action) => {
        state.loading = false;
        state.quests.push(action.payload); // Add the new quest to the state
      })
      .addCase(createQuest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Delete quest
      .addCase(deleteQuest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteQuest.fulfilled, (state, action) => {
        state.loading = false;
        state.quests = state.quests.filter(
          (quest) => quest.id !== action.meta.arg // Remove the deleted quest from the state
        );
      })
      .addCase(deleteQuest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default questSlice.reducer;
