import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./AudioSlice";
import listSlice from "./ListSlice";
import recommendSlice from "./RecommendSlice";
import searchSlice from "./SearchSlice";

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
    list: listSlice.reducer,
    audio: audioSlice.reducer,
    recommend: recommendSlice.reducer,
  },
});
