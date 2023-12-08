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
        if(props.name === 'r/Home') {
            dispatch(setSelectedSubreddit('r/popular'))
        } else {
        dispatch(setSelectedSubreddit(props.name))
        }
    };

    return (
        <li key={props.id}>
            <button onClick={handleClick}>
                <img src={props.img} alt=''></img>
                <span>{name}</span>
            </button>
        </li>
    )
}