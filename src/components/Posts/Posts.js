import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostLoading } from "../PostLoading/PostLoading";
import { Post } from "../Post/Post";
import { PostsError } from "../PostsError/PostsError";
import "./Posts.css";
import { fetchPosts } from "../../features/postsSlice";

export const Posts = () => {

    const dispatch = useDispatch();
    const state = store.getState();
    const posts = useSelector((state) => state.posts);
    const { isLoading, error, selectedSubreddit, filter } = posts;

    useEffect(() => {
        dispatch(fetchPosts())
    })
}