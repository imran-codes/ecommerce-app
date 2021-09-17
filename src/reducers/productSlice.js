import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../utils/Data';

const initialState = {
  products: Products
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    storeProducts: (state, action) => {
      return {
        ...state, 
        products: [...state.products, action.payload]
      }     
  },


  },

});



export const { storeProducts } = productSlice.actions;

// Selector
export const selectProducts = (state) => {
    console.log(state)
    return state.product.products;
}

export default productSlice.reducer;


