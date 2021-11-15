import { configureStore } from '@reduxjs/toolkit';
import redditSliceReducer from './redditSlice'

export const store = configureStore({
  reducer: {
    redditSlice:redditSliceReducer
  },
});
