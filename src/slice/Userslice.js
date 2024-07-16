import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../layouts/axiosInstance";

export const RegisterUser = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/register", data);
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const LoginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const LogoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/logout");
      localStorage.removeItem("token");
      return response.data;
    } catch (error) {
      console.error("Error during logout:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "user/me",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/current/user");
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const sendotp = createAsyncThunk(
  "send/otp",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/send/otp", { email });
      return response.data;
    } catch (error) {
      console.error("Error during sendotp:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "verify/otp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/verify/otp", data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error during verifying otp:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "forget-password",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/forget-password", { email });
      return response.data;
    } catch (error) {
      console.error("Error during forget-pasword:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "reset-password",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/reset-password", data);
      return response.data;
    } catch (error) {
      console.error("Error during verifying otp:", error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "update-user",
  async ({ id, data }) => {
    try {
      const response = await axiosInstance.put(`/users/${id}`, data);

      return response.data;
    } catch (error) {
      console.log("Error" + error);
    }
  }
);

export const deleteUser = createAsyncThunk("delete-user", async ({ id }) => {
  try {
    const response = await axiosInstance.put(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error on Deleting the user: ", error);
  }
});

const initialState = {
  userData: null,
  registration: {
    loading: false,
    success: false,
    error: null,
  },
  login: {
    loading: false,
    success: false,
    error: null,
  },
  currentUser: {
    loading: false,
    success: false,
    error: null,
  },
  otpData: {
    loading: false,
    success: false,
    error: null,
    message: "",
  },
  correctOtp: {
    loading: false,
    success: false,
    error: null,
  },
  logout: {
    loading: false,
    success: false,
    error: null,
  },
  forgetPass: {
    loading: false,
    success: false,
    message: "",
    error: null,
  },
  resetPass: {
    loading: false,
    success: false,
    message: "",
    error: null,
  },
  deleteUser: {
    loading: false,
    success: false,
    message: "",
    error: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.registration.loading = true;
        state.registration.error = null;
        state.registration.success = false;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.registration.loading = false;
        state.registration.success = true;
        state.userData = action.payload;
        state.registration.error = null;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.registration.loading = false;
        state.registration.error = action.payload;
        state.registration.success = false;
      });

    // Login
    builder
      .addCase(LoginUser.pending, (state) => {
        state.login.loading = true;
        state.login.error = null;
        state.login.success = false;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.login.loading = false;
        state.login.success = true;
        state.userData = action.payload;
        state.login.error = null;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = action.payload;
        state.login.success = false;
      });

    // Logout
    builder
      .addCase(LogoutUser.pending, (state) => {
        state.logout.loading = true;
        state.logout.error = null;
        state.logout.success = false;
      })
      .addCase(LogoutUser.fulfilled, (state, action) => {
        state.logout.loading = false;
        state.logout.success = true;
        state.logout.error = null;
        state.userData = action.payload;
        state.login.success = false;
      })
      .addCase(LogoutUser.rejected, (state, action) => {
        state.logout.loading = false;
        state.logout.error = action.payload;
        state.logout.success = false;
      });

    // Get current user
    builder
      .addCase(currentUser.pending, (state) => {
        state.currentUser.loading = true;
        state.currentUser.error = null;
        state.currentUser.success = false;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.currentUser.loading = false;
        state.currentUser.success = true;
        state.userData = action.payload;
        state.currentUser.error = null;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.currentUser.loading = false;
        state.currentUser.error = action.payload;
        state.currentUser.success = false;
      });
    builder
      .addCase(deleteUser.pending, (state) => {
        state.deleteUser.loading = true;
        state.deleteUser.error = null;
        state.deleteUser.success = false;
      })
      .addCase(deleteUser.fulfilled,(state,action)=>{
        state.deleteUser.loading=false;
        state.deleteUser.success=true;
        state.userData=null;
        state.deleteUser.error=null;
      })
      .addCase(deleteUser.rejected,(state,action)=>{
        state.deleteUser.loading=false;
        state.deleteUser.success=false;
        state.deleteUser.error=action.payload;
      })

    // Send OTP
    builder
      .addCase(sendotp.pending, (state) => {
        state.otpData.loading = true;
        state.otpData.error = null;
        state.otpData.success = false;
        state.otpData.message = "";
      })
      .addCase(sendotp.fulfilled, (state, action) => {
        state.otpData.loading = false;
        state.otpData.error = null;
        state.otpData.success = true;
        state.otpData.message = action.payload;
      })
      .addCase(sendotp.rejected, (state, action) => {
        state.otpData.loading = false;
        state.otpData.error = action.payload;
        state.otpData.success = false;
        state.otpData.message = "";
      });

    // Verify OTP
    builder
      .addCase(verifyOtp.pending, (state) => {
        state.correctOtp.loading = true;
        state.correctOtp.error = null;
        state.correctOtp.success = false;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.correctOtp.loading = false;
        state.correctOtp.error = null;
        state.correctOtp.success = true;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.correctOtp.loading = false;
        state.correctOtp.error = action.payload;
        state.correctOtp.success = false;
      });

    //forgot-password
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.forgetPass.loading = true;
        state.forgetPass.error = null;
        state.forgetPass.success = false;
        state.forgetPass.message = "";
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.forgetPass.loading = false;
        state.forgetPass.success = true;
        state.forgetPass.error = null;
        state.forgetPass.message = action.payload;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.forgetPass.loading = false;
        state.forgetPass.success = false;
        state.forgetPass.error = action.payload;
        state.forgetPass.message = "";
      });

    //reset-password
    builder
      .addCase(resetPassword.pending, (state) => {
        state.resetPass.loading = true;
        state.resetPass.error = null;
        state.resetPass.success = false;
        state.resetPass.message = "";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.resetPass.loading = false;
        state.resetPass.success = true;
        state.resetPass.error = null;
        state.resetPass.message = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.resetPass.loading = false;
        state.resetPass.success = false;
        state.resetPass.error = action.payload;
        state.resetPass.message = "";
      });
  },
});

export default userSlice.reducer;
