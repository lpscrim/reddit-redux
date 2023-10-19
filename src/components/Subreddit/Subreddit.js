import React from "react";
import './Subreddit.css';
import { useDispatch } from "react-redux";
import { setSelectedSubreddit } from "../../features/postsSlice";

export const Subreddit = (props) => {

    const dispatch = useDispatch();

    let name = props.name;

    if(props.name === 'r/Home') {
        name = 'r/popular'
    };

    const handleClick = () => {
        dispatch(setSelectedSubreddit(props.name));
    };

    return (
        <li>
            <button onClick={handleClick}>
                <img src={props.img} alt=''></img>
                <span>{props.name}</span>
            </button>
        </li>
    )
}