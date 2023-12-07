import React from "react";
import store from "../../store/store";
import './SearchResults.css';
import { selectSearchResults } from "../../features/searchSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ResultsLoading } from "./ResultsLoading";
import { Result } from "./Result";

export const SearchResults = () => {

    const results = useSelector(selectSearchResults);
    const state = store.getState();
    let resultsList = '';

    if(!results) {
        return (
            <div ClassName="results-list">
                <p>No Subreddits found!</p>
            </div>
        )
    }

    if(state.search.isLoading) {
        resultsList = '';

        return (
            <ResultsLoading />
        )
    }

    if(state.search.results) {
        resultsList = results.slice(0,6).map(result => {
            const name = result.display_name_prefixed;
            const icon = result.icon_img;
            const subs = result.subscribers;
            return (
                <Result 
                    name={name}
                    icon={icon}
                    subs={subs}
                />
            )
        })

        return (
            <ul className="results-list">
                {resultsList}
            </ul>
        )
    }
}