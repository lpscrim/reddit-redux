import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    'subReddits/fetchSubReddits',
    async () => {
        const res = await fetch(`https://www.reddit.com/subreddits.json`)
        const json = await res.json()
        return json.data.children.map(subreddit => subreddit.data)
    }
);
const initialState = {
    subReddits: [],
    isLoading: false,
    error: false
};

export const subRedditsSlice = createSlice({
    name: 'subReddits',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSubreddits.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.subReddits = action.payload;
        },
        [fetchSubreddits.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export default subRedditsSlice.reducer;

export const selectSubreddit = state => state.subReddits.subReddits;
