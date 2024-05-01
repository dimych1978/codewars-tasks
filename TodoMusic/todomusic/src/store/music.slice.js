import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const track = action.payload;
      const isExist = state.some(item => track.id === item.id);
      if (isExist) {
        const index = state.findIndex(item => {
          track.id === item.id;
        });
        console.log(index);
        if (index === -1) {
          console.log(state.id);
          state.splice(index, 1);
        }
      } else state.push(track);
    },
  },
});

export const { actions, reducer } = favoriteSlice;
