import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebar: false,
}
export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      return {
        ...state, 
        sidebar: !state.sidebar
      }     
     },
  },

});



export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;


