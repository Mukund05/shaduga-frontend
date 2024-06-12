import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

export const newCommunity = createAsyncThunk(
  "community/register",
  async (data, { rejectWithValue }) => {
    try {
      console.log("data", data);

      // // Create a FormData object
      // const formData = new FormData();
      // // formData.append('logo', logoFile);

      // // Append other fields to FormData
      // formData.append("id", data.id);
      // formData.append("name", data.name);
      // formData.append("description", data.description);
      // formData.append("categories", JSON.stringify(data.categories));
      // formData.append("is_blockchain", JSON.stringify(data.is_blockchain));
      // formData.append("website", data.website);
      // formData.append("link", data.link);
      // formData.append("invitation", JSON.stringify(data.invitation));

      // // Append the file (logo)
      // // const logoFile = document.querySelector('input[type="file"]').files[0]; // Assuming file input in your form
      // formData.append("logo", data.logo);

      // for (let pair of formData.entries()) {
      //   console.log(`${pair[0]}: ${pair[1]}`);
      // }

      // console.log(formData);

      const response = await axiosInstance.post("/communities", data,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log(response.data);
      return response;
    } catch (error) {
      console.error("Error during creating community:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const allCommunities = createAsyncThunk(
  "community/communities",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/communities");

      return response.data;
    } catch (error) {
      console.error("Error during fetching all communities:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const community = createAsyncThunk(
  "community/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`user/communities/${id}`);
      return response.data; // Assuming response data is the desired result
    } catch (error) {
      console.error(`Error during fetching community with id ${id}:`, error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const communitySlice = createSlice({
  name: "community",
  initialState: {
    communityData: null,
    loading: false,
    error: null,
    success: false,
    message: "",
    communities: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newCommunity.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(newCommunity.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.communityData = action.payload;
        state.message = action.payload;
      })
      .addCase(newCommunity.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        state.message = action.payload;
      });
    builder
      .addCase(allCommunities.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(allCommunities.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.communities = action.payload;
      })
      .addCase(allCommunities.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        state.message = action.payload;
      });
    builder
      .addCase(community.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(community.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.communityData = action.payload;
      })
      .addCase(community.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        state.message = action.payload;
      });
  },
});
export default communitySlice.reducer;
