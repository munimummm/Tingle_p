import { createSlice } from "@reduxjs/toolkit";
let loginSlice = createSlice({
  name: "login",
  initialState: {
    showSidebar: true,
  },
  reducers: {
    setShowSidebar(state, action) {
      state.showSidebar = action.payload;
    },
  },
});

export const { setShowSidebar } = loginSlice.actions;
export default loginSlice;
