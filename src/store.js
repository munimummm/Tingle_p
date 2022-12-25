import { configureStore, createSlice } from "@reduxjs/toolkit";
let user = createSlice({
  name: "state이름",
  initialState: "kim",
});
export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
