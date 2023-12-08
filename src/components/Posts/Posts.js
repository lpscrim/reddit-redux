import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostLoading } from "../PostLoading/PostLoading";
import { Post } from "../Post/Post";
import { PostsError } from "../PostsError/PostsError";
import "./Posts.css";
import { fetchPosts } from "../../features/postsSlice";

export const Posts = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const { isLoading, error, selectedSubreddit, filter } = posts;

    useEffect(() => {
        dispatch(fetchPosts({selectedSubreddit, filter}));
    }, [dispatch, selectedSubreddit, filter])
    
    if(isLoading) {
        return (
            <div className="posts">
                <ul>
                    <h3 className="loading-title">Loading</h3>
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                    <PostLoading />
                </ul>
            </div>
        )
    }

    if(error) {
        return (
            <PostsError />
        )
    }

    else {
        return (
            <div className="posts">
                <ul>
                    <h3 className="feed-title">{filter} posts in ({selectedSubreddit})</h3>
                    {posts.posts.map(({ 
                        title, 
                        subreddit_name_prefixed: subreddit, 
                        author, 
                        thumbnail, 
                        score, 
                        url: fullImage, 
                        url_overridden_by_dest: gif, 
                        post_hint: mediaType, 
                        domain, 
                        is_gallery: isGallery,
                        selftext: text, 
                        permalink, 
                        id, 
                        media 
                    }) => (
                        <Post 
                            key={id} 
                            title={title} 
                            subreddit={subreddit} 
                            author={author} 
                            thumbnail={thumbnail} 
                            score={score} 
                            fullImage={fullImage} 
                            gif={gif} 
                            mediaType={mediaType} 
                            domain={domain} 
                            isGallery={isGallery}
                            text={text} 
                            permalink={permalink} 
                            id={id} 
                            media={media} 
                        />
                    ))}
                </ul>
            </div>
        )
    }
}