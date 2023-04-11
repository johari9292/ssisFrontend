import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
  status: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
      state.status = true;
    },
    logout: (state) => {
      state.value = {};
      state.status = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
