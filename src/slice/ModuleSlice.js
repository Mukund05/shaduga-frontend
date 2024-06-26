import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

// Async thunk for getting unique commmunties modules
export const fetchModulebyId = createAsyncThunk(
  "module/module",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/modules/" + id);
      return response.data;
    } catch (error) {
      console.error("Error during fetching all modules:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const createModule = createAsyncThunk(
  "module/createModule",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/modules", data);
      return response.data;
    } catch (error) {
      console.error("Error during fetching all modules:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const deleteModule = createAsyncThunk(
  "module/delete",
  async(id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`modules/${id}`);
    } catch (error) {
      console.error("Error during deleting the module: ",error);
      if(error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateModule = createAsyncThunk(
  "module/update",
  async(data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`modules/${data.id}`,data);
      return response.data;
    } catch (error) {
      console.error("Error during updating the module: ",error);
      if(error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
)

// Define the initial state of the slice
const initialState = {
  modules: [],
  loading: false,
  error: null,
};

// Create the slice
const moduleSlice = createSlice({
  name: "module",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all quests
      .addCase(fetchModulebyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchModulebyId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.modules = action.payload.data;
      })
      .addCase(fetchModulebyId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default moduleSlice.reducer;
