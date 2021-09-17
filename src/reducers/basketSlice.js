import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
}
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if(index > -1) {
        state.items[index].quantity ++
           return state 
          
        
      }
      return {
        ...state, 
        items: [...state.items, {...action.payload, quantity: 1}]
      }
      
        
  },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      let newBasket = [...state.items]
      if(index !== -1) {
        if(state.items[index].quantity > 1) { 
          state.items[index].quantity --
          return state;
        }
        newBasket.splice(index, 1)
          state.items = newBasket;
          return state       
        }
  },

  deleteFromBasket: (state, action) => {
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



export const { addToBasket, removeFromBasket, deleteFromBasket } = basketSlice.actions;

// Selector
export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => {
const totalNumber = state.basket.items.reduce((total, item) => total += item.quantity, 0);
return totalNumber;
}

export const selectBasketTotal = (state) => {
const totalAmount = state.basket.items.reduce((total, item) => total += item.price * item.quantity, 0);
return totalAmount;
};


export default basketSlice.reducer;


