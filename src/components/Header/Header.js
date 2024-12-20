import "./Header.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import {
  selectSearchTerm,
  setSearchTerm,
  setSelectedSubreddit,
} from "../../features/postsSlice";
import { SearchResults } from "../SearchResults/SearchResults";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { fetchSearch } from "../../features/searchSlice";

export const Header = () => {
  const searchTermLocal = useSelector(selectSearchTerm);
  const state = store.getState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchSearch(state.posts.searchTerm));
  }, [dispatch, state.posts.searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setSelectedSubreddit("r/" + searchTermLocal));
    dispatch(setSearchTerm(""));
  };

  return (
    <div className="header">
      <div className="title">
        <img src="logo.png" alt="logo of reddit with bread" height="50px" width="auto"/>
        <img src="Bread.png" alt="website name in bread" height="200px" width="auto"/>
      </div>
      <form onSubmit={handleSubmit} data-testid="search-form">
        <MagnifyingGlass size={28} />
        <input
          id='input'
          className="search-bar"
          onChange={handleChange}
          placeholder="Search Subreddits"
          value={searchTermLocal}
        ></input>
        <div className="search-box">
          <SearchResults />
        </div>
      </form>
    </div>
  );
};
