import React from "react";
import { SpinnerGap } from "@phosphor-icons/react";
import './PostLoading.css'

export const PostLoading = () => {
    return (
        <li className="post">
            <div className="score">
            </div>
            <div className="left-side">
                <img src='' alt='loading...'></img>
            </div>
            <div className="right-side">
                <div className="top">
                    <div className="loader">
                        <SpinnerGap size={30}>
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                dur="0.6s"
                                from="0 0 0"
                                to="360 0 0"
                                repeatCount="indefinite"
                            ></animateTransform>
                        </SpinnerGap>
                    </div>
                </div>
                <div className="bottom">
                    <p className="subreddit"></p>  
                    <p className="author" target='_blank'></p>                 
                </div>
            </div>
        </li>
    )
}