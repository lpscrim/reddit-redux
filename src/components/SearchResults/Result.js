import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm, setSelectedSubreddit } from "../../features/postsSlice";
import "./SearchResults.css";

export const Result = (props) => {

    const dispatch = useDispatch();

    const handleClickResult = () => {
        dispatch(setSelectedSubreddit(props.name));
        dispatch(setSearchTerm(''));
    }

    return (
        <li className="result" onMouseDown={handleClickResult} >
            <div className="left">
                <img src={props.icon} alt=""></img>
                <h4>{props.name}</h4>
            </div>
            <div className="right">
                <h4>{props.subs}</h4>
            </div>
        </li>
    )
}