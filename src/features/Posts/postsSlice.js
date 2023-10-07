import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    searchTerm: '',
    selectedSubreddit: 'r/pics/',
    postsLoading: false,
    postsError: false
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload; // Replace with posts from Reddit API
        },
        getPostsStart: (state) => {
            state.postsLoading = true;
            state.postsError = false;
        },
        getPostsSuccess: (state) => {
            state.postsError = false;
            state.postsLoading = false;
            state.posts= action.payload;
        },
        getPostsFailed: (state) => {
            state.postsError = true;
            state.postsLoading = false;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload; 
        },
        setSelectedSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        setFetchingData: (state, action) => {
            state.fetchingData = action.payload;
        }
    }
})

export const {
    setPosts, 
    getPostsStart, 
    getPostsSuccess, 
    getPostsFailed, 
    setSearchTerm, 
    setSelectedSubreddit, 
    setFetchingData 
} = postsSlice.actions;

export default postsSlice.reducer;