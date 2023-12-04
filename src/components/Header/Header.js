import './Header.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/store';
import { selectSearchTerm, setSearchTerm, setSelectedSubreddit } from '../../features/postsSlice';
//import { SearchResults } from '../SearhResults/SearchResults';
import { RedditLogo, MagnifyingGlass } from '@phosphor-icons/react';


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
                <RedditLogo size={32}/>
                <span>REDDIT?</span>
            </div>
            <form onSubmit={handleSubmit}>
                <MagnifyingGlass size={28}/>
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