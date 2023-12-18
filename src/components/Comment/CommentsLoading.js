import React from "react";
import './Comment.css';
import { SpinnerGap } from "@phosphor-icons/react";

export function CommentsLoading() {

    return (
        <div className="comment">
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
            <p>Comments loading</p>
        </div>
    )
}