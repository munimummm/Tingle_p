import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import audioReducer from "./AudioSlice";
import detailReducer from "./DetailSlice";
import listReducer from "./ListSlice";
import playListReducer from "./PlayListSlice";
import recommendReducer from "./RecommendSlice";
import searchReducer from "./SearchSlice";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  search: searchReducer.reducer,
  list: listReducer.reducer,
  audio: audioReducer.reducer,
  recommend: recommendReducer.reducer,
  playList: playListReducer.reducer,
  detail: detailReducer.reducer,
});
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["playList", "audio", "list"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
