import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.action";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.user = false;
      });
  },
});

export const {actions, reducer} = userSlice;