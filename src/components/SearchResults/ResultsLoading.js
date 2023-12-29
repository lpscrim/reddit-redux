import React from "react";
import { SpinnerGap } from "@phosphor-icons/react";
import "./SearchResults.css";

export const ResultsLoading = () => {
  return (
    <ul className="results-list" data-testid="searchLoader">
      <li className="loader">
        <SpinnerGap size={28}>
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
      </li>
      <li className="loader">
        <SpinnerGap size={28}>
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
      </li>
      <li className="loader">
        <SpinnerGap size={28}>
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
      </li>
      <li className="loader">
        <SpinnerGap size={28}>
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
      </li>
      <li className="loader">
        <SpinnerGap size={28}>
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
      </li>
    </ul>
  );
};
