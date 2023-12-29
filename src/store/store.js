import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postsReducer from "../features/postsSlice";
import searchReducer from "../features/searchSlice";
import subredditsReducer from "../features/subredditsSlice";

const store = configureStore({
  reducer: combineReducers({
    posts: postsReducer,
    search: searchReducer,
    subreddits: subredditsReducer,
  }),
});

export default store;
