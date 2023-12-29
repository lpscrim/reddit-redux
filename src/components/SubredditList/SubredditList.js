import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddits } from "../../features/subredditsSlice";
import { Subreddit } from "../Subreddit/Subreddit";
import "./SubredditList.css";

export const SubredditList = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector((state) => state.subreddits);
  const { isLoading, error } = subreddits;

  const subredditsList = subreddits.subreddits.slice(0, 25).map((sub) => {
    return (
      <Subreddit
        name={sub.display_name_prefixed}
        img={sub.icon_img}
        id={sub.id}
        key={sub.id}
      />
    );
  });

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="subredditList" data-testid="loader">
        <ul>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error loading Subs!</p>
      </div>
    );
  }

  return (
    <div className="subredditList">
      <ul>{subredditsList}</ul>
    </div>
  );
};
