import { configureStore } from '@reduxjs/toolkit';
import basketSlice from '../reducers/basketSlice';
import productSlice from '../reducers/productSlice'
import sidebarSlice from '../reducers/sidebarSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    product: productSlice,
    sidebar: sidebarSlice,
  },
});
