import React from "react";
import "./Filter.css";
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
            <div className="container">
                <div className="card" id="top" onClick={handleClickTop} data-testid="top-card">
                    <ChartLineUp className="img" size={40}/>
                    <p>Top</p>
                </div>
                <div className="card" id="best" onClick={handleClickBest} data-testid="best-card">
                    <ThumbsUp className="img" size={40}/>
                    <p>Best</p>
                </div>
                <div className="card" id="new" onClick={handleClickNew} data-testid="new-card">
                    <ShootingStar className="img" size={40}/>
                    <p>New</p>
                </div>
            </div>
        </div>
    )
}
