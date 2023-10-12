import './header.css';
import React, { useState, useEffect } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import store from '../../store/store';
import { selectSearchTerm, setSearchTerm, setSelectedSubreddit } from '../../features/postsSlice';
//import { SearchResults } from '../SearhResults/SearchResults';


export const Header = () => {

    const searchTermLocal = useSelector(selectSearchTerm);
    const state = store.getState();
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };
    
    useEffect(() =>{
        dispatch(fetchSearch(state.posts.searchTerm))
    }, [state.posts.searchTerm]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setSelectedSubreddit('r/'+searchTermLocal));
        dispatch(setSearchTerm(''));
    };

    return (
        <div className='header'>
            <div className='title'>
                <img 
                    src='/reddit-icon.img'
                    alt='logo'
                    id='logo'>
                </img>
                <span>REDDIT?</span>
            </div>
            <form onSubmit={handleSubmit}>
                <img 
                    src='/search-icon.png'
                    alt='search-icon'
                    id='search-icon'>
                </img>
                <input
                className='search-bar'
                onChange={handleChange}
                placeholder='Search Subreddits'
                value={searchTermLocal}>
                </input>
                <div className='search-box'>
                    <SearchResults />
                </div>
            </form>
        </div>
    )
}