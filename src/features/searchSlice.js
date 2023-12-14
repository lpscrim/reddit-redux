import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async (term) => {
        const res = await fetch(`https://www.reddit.com/search/.json?q=${term}&type=sr`);
        const json =  await res.json();
        return json.data.children.map(element => element.data)
    }
)

const initialState = {
    results: '',
    isLoading: false,
    error: false
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSearch.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.results = action.payload;
        },
        [fetchSearch.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export default searchSlice.reducer;

export const selectSearchResults = state => state.search.results;