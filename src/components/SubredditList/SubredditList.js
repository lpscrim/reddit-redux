import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, fetchSubreddits } from "../../features/subredditsSlice";
import store from "../../store/store";
import { Subreddit } from "../Subreddit/Subreddit";
import { SpinnerGap } from "@phosphor-icons/react";

export const SubredditList = () => {

    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const state = store.getState();
    const subredditsList = subreddits.slice(0,16).map(sub => {
        return (
            <Subreddit 
                name={sub.display_name_prefixed}
                img={sub.img}
                id={sub.id}
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
              {[...Array(13)].map((_, index) => (
                <li key={index}>
                  <button>
                  <SpinnerGap size={14}>
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="rotate"
                                dur="5s"
                                from="0 0 0"
                                to="360 0 0"
                                repeatCount="indefinite"
                            ></animateTransform>
                        </SpinnerGap>
                  </button>
                </li>
              ))}
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