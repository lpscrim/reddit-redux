import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm, setSelectedSubreddit } from "../../features/postsSlice";


export const Result = (props) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setSelectedSubreddit(props.name));
        dispatch(setSearchTerm(''));
    }

    return (
        <li className="result" onClick={handleClick}>
            <img src={props.icon}></img>
            <h4>{props.name}</h4>
            <h2>{props.subs}</h2>
        </li>
    )
}