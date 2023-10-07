import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    comments: [],
    commentsShowing: false,
    commentsLoading: false,
    commentsError: false
};

export const postsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        toggleShowingComments: (state, action) => {
            state.posts[action.payload].showingComments = !state.posts[action.payload]
        .showingComments;
        },
        getCommentsStart(state, action) {
            if (!state.posts[action.payload].showingComments) {
                return;
              }
            state.posts[action.payload].commentsLoading = true;
            state.posts[action.payload].commentsError = false;
        },
        getCommentsSuccess: (state, action) => {
            state.posts[action.payload.index].commentsLoading = false;
            state.posts[action.payload.index].comments = action.payload.comments;
        },
        getCommentsFailed: (state) => {
            state.posts[action.payload].commentsLoading = false;
            state.posts[action.payload].commentsError = true;
        },
    }
});

export const {
    toggleShowingComments,
    getCommentsStart,
    getCommentsSuccess,
    getCommentsFailed
} = commentsSlice.actionsl

export default commentsSlice.reducer;

//export const fetchComments = (index, permalink) => async (dispatch) => {
//    try {
 //     dispatch(getCommentsStart(index));
 //     const comments = await getPostComments(permalink);
 //     dispatch(getCommentsSuccess({ index, comments }));
 //   } catch (error) {
 //     dispatch(getCommentsFailed(index));
//    }
 // };