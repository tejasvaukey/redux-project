import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSline";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        collection: collectionReducer
    }
});