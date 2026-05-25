import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        activeTab: "photos",
        results: [],
        isLoading: false,
        error: null
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
        setActiveTab(state, action) {
            state.activeTab = action.payload;
        },
        setResults(state, action) {
            state.isLoading = false;
            state.results = action.payload;
        },
        setLoading(state) {
            state.isLoading = true;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        clearResults(state) {
            state.results = [];
        }
    }
});

export const { setQuery, setActiveTab, setResults, setLoading, setError, clearResults } = searchSlice.actions;
export default searchSlice.reducer;