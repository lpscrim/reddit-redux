import React from "react";
import './Comment.css';
import { ArrowCircleUp } from "@phosphor-icons/react";

export const Comment = (props) => {
    return (
        <div className="comment">
            <div className="top">
                <p className="author">u/{props.author}</p>
                <div className="score">
                    <ArrowCircleUp size={24} />
                    <p className="score">{props.score}</p>
                </div>
            </div>
            <div className="body">
                <p>{props.body}</p>
            </div>
        </div>
    )
}