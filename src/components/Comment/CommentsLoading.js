import React from "react";
import './Comment.css';
import { SpinnerGap } from "@phosphor-icons/react";

export function commentsLoading() {

    return (
        <div className="comment">
            <SpinnerGap size={30}>
                <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="5s"
                    from="0 0 0"
                    to="360 0 0"
                    repeatCount="indefinite"
                ></animateTransform>
            </SpinnerGap>
            <p>Comments loading</p>
        </div>
    )
}