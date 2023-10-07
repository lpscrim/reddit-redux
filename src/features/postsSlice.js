import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (inputs) => {
        const {selectedSubreddit, filter} = inputs;
        const res = await fetch(`https://www.reddit.com/${selectedSubreddit}/${filter}.json`)
        const json = await res.json()
        return json.data.children.map(subreddit => subreddit.data)
    }
)

export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async (permalink) => {
        const res = await fetch(`https://www.reddit.com${permalink}.json`)
        const json = await res.json()
        return json[1].data.children.map(comments => comments.data)
    }
)


const initialState = {
    posts: [],
    searchTerm: '',
    selectedSubreddit: 'r/pics/',
    filter: '',
    isLoading: false,
    error: false,
    comments: [],
    commentsLoading: false,
    commentsError: false
};

export const feedSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload; 
        },
        setSelectedSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },

    extraReducers: { 

        [fetchPosts.pending]: (state) => {
            state.isLoading = true;
            state.error = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.error = false;
            state.isLoading = false;
            state.posts= action.payload;
        },
        [fetchPosts.rejected]: (state) => {
            state.error = true;
            state.isLoading = false;
        },
        [fetchComments.pending]: (state) => {
            state.commentsLoading = true;
            state.commentsError = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.commentsLoading = false;
            state.comments = action.payload;
        },
        [fetchComments.rejected]: (state) => {
            state.commentsLoading = false;
            state.commentsError = true;
        },
    }
})

export const {
    setSearchTerm, 
    setSelectedSubreddit, 
    setFilter,
} = postsSlice.actions;

export default postsSlice.reducer;

export const selectPosts = state => state.posts.posts;
export const selectSelectedSubreddit = state => state.posts.selectedSubreddit;
export const selectSearchTerm =  state => state.posts.searchTerm;
export const selectComments = state => state.posts.comments;

