import React, { useRef, useState } from "react";
import store from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, setSelectedSubreddit } from "../../features/postsSlice";
import { Chats, ArrowCircleUp } from "@phosphor-icons/react";

export const Post = props => {

    const [isActive, setIsActive] = useState('inactive');
    const [showComments, setShowComments] = useState('hidden');
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const commentList = '';
    
    const toggleComments = () => {
        if(showComments === 'hidden') {
            dispatch(fetchComments(props.permalink));
            setShowComments('show');
        }
        if(showComments === 'show') {
            setShowComments('hidden');
        }
    }
    
    const handleClick = () => {

        if (isActive === 'inactive') {
            setIsActive('active')
            document.getElementById(props.title).scrollIntoView(false)
        } if(isActive === 'active') {
            setIsActive('inactive')
        } if(showComments === 'show') {
            setShowComments('hidden')
        }
    }


    const content = () => {

        if(props.mediaType === 'image') {
            return (
                <img src={props.fullImage} alt=''></img>
            )
        }

        if(props.mediaType === 'hosted:video') {
            return (
                <video className="reddit-video" controls>
                    <source src={props.media.reddit_video.fallback_url} type="video/mp4" ></source>
                </video>
            )
        }

        if(props.mediaType === "link") {
            return (
                <div className="link">

                </div>
            )
        }

        if(props.isGallery === true) {
            return (
                <div className="gallery">

                </div>
            )
        }

        if(props.text) {
            return (
                <div className="text">
                    
                </div>
            )
        }

    }

    return (
        <div className={isActive} id={props.title} onClick={handleClick}>
            <li className="post" id={isActive}>
                <div className="left-side">
                    <img src={props.thumbnail} alt=""></img>
                </div>
                <div className="right-side">
                    <div className="top">
                        <p className="subreddit" onClick={() => dispatch(setSelectedSubreddit(props.subreddit))}>{props.subreddit}</p>
                        <p className="author">OP: u/{props.author}</p>
                    </div>
                    <div className="bottom">
                        <h3 className="title">{props.title}</h3>
                    </div>
                    <div className="content">
                        {content()}
                    </div>
                </div>
                <button className="comments-toggle" onClick={toggleComments}>
                    <Chats size={28} />Comments
                </button>
                <div className="score">
                    <ArrowCircleUp size={24} />
                    <p>{props.score}</p>
                </div>
            </li>
            <div className={showComments} id="comments">
                <ul>
                    {commentList}
                </ul>
            </div>
        </div>
    )
}