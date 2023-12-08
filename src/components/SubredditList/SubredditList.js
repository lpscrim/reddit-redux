import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, fetchSubreddits } from "../../features/subredditsSlice";
import store from "../../store/store";
import { Subreddit } from "../Subreddit/Subreddit";

export const SubredditList = () => {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const state = store.getState();
    const subredditsList = subreddits.slice(0,16).map(sub => {
        return (
            <Subreddit 
                name={sub.display_name_prefixed}
                img={sub.icon_img}
                id={sub.id}
                key={sub.id}
            />
        )
    })

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch])

    if(state.subreddits.isLoading) {
        return (
            <div className="subredditList">
            <ul>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
                    <li><button></button></li>
            </ul>
          </div>
        )
    }
    if (!state.subreddits.isLoading) {
        return (
            <div className="subredditList">
                <ul>
                    {subredditsList}
                </ul>
            </div>
        )
    }
}