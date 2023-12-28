import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        const res = await fetch(`https://www.reddit.com/subreddits.json`)
        const json = await res.json()
        return json.data.children.map(subreddit => subreddit.data)
    }
);
const initialState = {
    subreddits: [],
    isLoading: true,
    error: false,
};

export const subredditsSlice = createSlice({
    name: 'subreddits',
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
            state.subreddits = action.payload;
        },
        [fetchSubreddits.rejected]: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export default subredditsSlice.reducer;

export const selectSubreddits = state => state.subreddits.subreddits;
