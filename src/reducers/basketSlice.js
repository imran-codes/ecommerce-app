import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
}
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
  },
    removeFromBasket: (state, action) => {
      //...use id that we have passed and remove the item from basket with that id

      let newBasket = [...state.items]

      //find index of first item in basket
      const index = state.items.findIndex((item) => item.id === action.payload.id)

      if (index !== -1 ) {
        //splice item out of basket
        newBasket.splice(index, 1)
        state.items = newBasket;
      } else {
        console.warn (`Can't remove product as its not in basket`)
      }
  },

  },

});



export const { addToBasket, removeFromBasket } = basketSlice.actions;

//Selector
export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => state.basket.items.length;
export const selectBasketTotal = (state) => {
const totalAmount = state.basket.items.reduce((total, item) => total += item.price, 0);
return totalAmount;
};


export default basketSlice.reducer;