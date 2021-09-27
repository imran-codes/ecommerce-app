import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebar: false,
}
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    showSidebar: (state, action) => {
      return {
        ...state, 
        sidebar: 
          {
            ...action.payload, 
            sidebar: true
          }
      }
      
        
  },
    hideSidebar: (state, action) => {
      return {
        ...state, 
        sidebar:  {
          ...action.payload, 
          sidebar: false
        }
      }
  },
  

  },

});



export const { showSidebar, hideSidebar } = sidebarSlice.actions;

// Selector
// export const selectItems = (state) => state.sidebar.items;
// export const selectItemsCount = (state) => {
// const totalNumber = state.sidebar.items.reduce((total, item) => total += item.quantity, 0);
// return totalNumber;
// }

// export const selectsidebarTotal = (state) => {
// const totalAmount = state.sidebar.items.reduce((total, item) => total += item.price * item.quantity, 0);
// return totalAmount;
// };


export default sidebarSlice.reducer;


