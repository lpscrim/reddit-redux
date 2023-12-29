import React from "react";
import "./SearchResults.css";
import { useSelector } from "react-redux";
import { ResultsLoading } from "./ResultsLoading";
import { Result } from "./Result";

export const SearchResults = () => {
  const search = useSelector((state) => state.search);
  const { isLoading, error, results } = search;
  let resultsList = "";

  if (error) {
    return <p>Search Error!</p>;
  }

  if (isLoading) {
    resultsList = "";
    return <ResultsLoading />;
  }

  if (results) {
    resultsList = results.slice(0, 6).map((result, index) => {
      const name = result.display_name_prefixed;
      const icon = result.icon_img;
      const subs = result.subscribers;
      return (
        <Result
          name={name}
          icon={icon}
          subs={subs}
          resultkey={index}
          key={index}
        />
      );
    });

    return <ul className="results-list">{resultsList}</ul>;
  }

  if (!results) {
    return (
      <div className="results-list">
        <p>No Subreddits found!</p>
      </div>
    );
  }
};
