import { configureStore } from '@reduxjs/toolkit';
import basketSlice from '../reducers/basketSlice';
import productSlice from '../reducers/productSlice'

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    product: productSlice,

  },
});
