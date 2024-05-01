import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./music.slice";
import {reducer as userSlice} from './user/user.slice'
import { api } from "./api/api";
import {createLogger} from 'redux-logger'

const logger = createLogger({
  collapsed: false,
  colors: 'red',
})

export const store = configureStore({
  reducer: { favorite: favoriteReducer, user: userSlice, [api.reducerPath]: api.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware).concat(logger)
});
