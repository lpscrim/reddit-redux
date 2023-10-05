import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    searchTerm: '',
    selectedSubreddit: 'r/pics/',
    isLoading: false,
    error: false
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload; // Replace with posts from Reddit API
        },
        setPostsLoading: (state, action) => {
            state.isLoading = true;
            state.error = false;
        },
        setPostsSuccess: (state, action) => {
            state.error = false;
            state.isLoading = false;
            //state.posts= action.payload;
        },
        setPostsFailed: (state, action) => {
            state.error = true;
            state.isLoading = false;
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
    setPostsLoading, 
    setPostsSuccess, 
    setPostsFailed, 
    setSearchTerm, 
    setSelectedSubreddit, 
    setFetchingData 
} = postsSlice.actions;

export default postsSlice.reducer;