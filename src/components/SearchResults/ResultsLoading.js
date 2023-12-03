import React from "react";
import { SpinnerGap } from "@phosphor-icons/react";

export const ResultsLoading = () => {
    return (
        <ul className="results-list">
            <div className="loader">
                        <SpinnerGap size={18}>
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
            </div>
            <div className="loader">
                        <SpinnerGap size={18}>
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
            </div>
            <div className="loader">
                        <SpinnerGap size={18}>
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
            </div>
        </ul>
    )
}