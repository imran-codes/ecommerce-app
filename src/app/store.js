import { configureStore } from '@reduxjs/toolkit';
import basketSlice from '../reducers/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
