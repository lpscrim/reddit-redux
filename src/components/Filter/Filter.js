import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../features/postsSlice";
import { ShootingStar, ThumbsUp, ChartLineUp } from "@phosphor-icons/react";

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
                    <ChartLineUp size={28}/>
                    <p>Top</p>
                </div>
                <div className="filter-card" id="best" onClick={handleClickBest}>
                    <ThumbsUp size={28}/>
                    <p>Best</p>
                </div>
                <div className="filter-card" id="new" onClick={handleClickNew}>
                    <ShootingStar size={28}/>
                    <p>New</p>
                </div>
            </div>
        </div>
    )
}
