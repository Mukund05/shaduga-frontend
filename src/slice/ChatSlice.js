import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

export const allChats = createAsyncThunk(
  "chats/allchats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/chats");
      return response;
    } catch (error) {
      console.error("Error during fetching all chats:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const createChat = createAsyncThunk(
  "chats/create",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/chats", data);
      return response;
    } catch (error) {
      console.error("Error during creating chat:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);
export const deleteChat = createAsyncThunk(
  "chats/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/chats/${id}`);
      return response;
    } catch (error) {
      console.error("Error during deleting chat:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    loading: false,
    success: false,
    error: null,
    allChatData: [],
    chatData: null,
    deleteData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allChats.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(allChats.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.allChatData = action.payload;
      })
      .addCase(allChats.rejected, (state, action) => {
        state.loading = false;
        state.success = true;
        state.allChatData = [];
        state.error = action.payload;
      });
    builder
      .addCase(createChat.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.chatData = action.payload;
      })
      .addCase(createChat.rejected, (state, action) => {
        state.loading = false;
        state.success = true;
        state.chatData = null;
        state.error = action.payload;
      });
    builder
      .addCase(deleteChat.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.deleteData = action.payload;
      })
      .addCase(deleteChat.rejected, (state, action) => {
        state.loading = false;
        state.success = true;
        state.deleteData = null;
        state.error = action.payload;
      });
  },
});
export default chatSlice.reducer;
