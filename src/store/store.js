import { configureStore } from "@reduxjs/toolkit";
import search from "./SearchSlice";

export default configureStore({
  reducer: {
    search: search.reducer,
  },
});
