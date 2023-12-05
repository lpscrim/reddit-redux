import React, { useState } from "react";
import store from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSubreddit } from "../../features/postsSlice";
import { Chats, ArrowCircleUp } from "@phosphor-icons/react";

export const Post = props => {

    const [isActive, setIsActive] = useState('inactive');
    const [showComments, setShowComments] = useState('hidden');
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const commentList = '';
    
    const handleClick = () => {

    }

    const toggleComments = () => {

    }

    const content = () => {

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