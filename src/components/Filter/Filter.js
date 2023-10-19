import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../features/postsSlice";

export const Filter = () => {

    const dispatch = useDispatch();

    const handleClickTop = () => {
        dispatch(setFilter('top'));
        document.getElementById('top').classList.add('active');
        document.getElementById('best').classList.remove('active');
        document.getElementById('new').classList.remove('active');
    }
    
    const handleClickBest =() => {
        dispatch(setFilter('best'));
        document.getElementById('best').classList.add('active');
        document.getElementById('top').classList.remove('active');
        document.getElementById('new').classList.remove('active');
    }

    const handleClickNew = () => {
        dispatch(setFilter('new'));
        document.getElementById('new').classList.add('active');
        document.getElementById('best').classList.remove('active');
        document.getElementById('top').classList.remove('active');
    }

    return (
        <div className="filter">
            <div className="filter-title">
                <p>Filter by:</p>
            </div>
            <div className="filter-container">
                <div className="fitler-card" id="top" onClick={handleClickTop}>
                    <img src='' alt='top-icon'></img>
                    <p>Top</p>
                </div>
                <div className="filter-card" id="best" onClick={handleClickBest}>
                    <img src='' alt='best-icon'></img>
                    <p>Best</p>
                </div>
                <div className="filter-card" id="new" onClick={handleClickNew}>
                    <img src='' alt='new-icon'></img>
                    <p>New</p>
                </div>
            </div>
        </div>
    )
}
