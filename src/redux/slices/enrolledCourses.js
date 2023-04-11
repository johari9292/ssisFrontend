import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrolledCourses: [],
};

export const userSlice = createSlice({
  name: "enrollCourses",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setEnrollCourses: (state, action) => {
      state.enrolledCourses = action.payload;
    },
  },
});

export const { setEnrollCourses } = userSlice.actions;

export default userSlice.reducer;
