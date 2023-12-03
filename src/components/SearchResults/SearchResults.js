import React from "react";
import store from "../../store/store";
import './SearchResults.css';
import { selectSearchResults } from "../../features/searchSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ResultsLoading } from "./ResultsLoading";

export const SearchResults = () => {

    const results = useSelector(selectSearchResults);
    const state = store.getState();
    const resultsList = '';

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
        
    }

}