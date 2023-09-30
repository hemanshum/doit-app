import { createSlice } from '@reduxjs/toolkit'
import { signup, login, logout } from '../thunks/authThunk'

const initialState = {
  username: '',
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  error: null,
  showSplashScreen: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
      state.isError = false;
    },
    autoLogin(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.showSplashScreen = false;
    },
    hideSplashScreen(state) {
      state.showSplashScreen = false;
    }
  },
  extraReducers(builder) {
    // SIGNUP
    builder.addCase(signup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isError = false;
      state.username = action.payload.username;
      state.token = action.payload.token;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    })

    // LOGIN
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isError = false;
      state.username = action.payload.username;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    })

    // 👇 Please pause the video and write this 👇
    // LOGOUT
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.isError = false;
      state.username = null;
      state.token = null;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    })

  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const { clearError, autoLogin, hideSplashScreen } = authSlice.actions;
export default authSlice.reducer;