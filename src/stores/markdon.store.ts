import { configureStore } from "@reduxjs/toolkit";
import { markdownReducer } from "../reducers/markdown.reducer";
export const store = configureStore({
    reducer: markdownReducer
});