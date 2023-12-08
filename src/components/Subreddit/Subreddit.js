import React from "react";
import './Subreddit.css';
import { useDispatch } from "react-redux";
import { setSelectedSubreddit } from "../../features/postsSlice";

export const Subreddit = (props) => {

    const dispatch = useDispatch();
    let name = props.name;

    if(props.name === 'r/Home') {
        name = 'r/Popular'
    };

    const handleClick = () => {
        dispatch(setSelectedSubreddit(name));
    };

    return (
        <li>
            <button onClick={handleClick}>
                <img src={props.img} alt=''></img>
                <span>{name}</span>
            </button>
        </li>
    )
}