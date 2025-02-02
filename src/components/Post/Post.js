import React, { useRef, useState, useEffect } from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, setSelectedSubreddit } from "../../features/postsSlice";
import { Chats, ArrowCircleUp } from "@phosphor-icons/react";
import { Comment } from "../Comment/Comment";
import { NoComments } from "../Comment/NoComments";
import { CommentsLoading } from "../Comment/CommentsLoading";

export const Post = (props) => {
  const [isActive, setIsActive] = useState("inactive");
  const [showComments, setShowComments] = useState("hidden");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  let commentList = "";
  let thumbnail = "";
  let score = "";
  const ref = useRef(null);

  const handleOffClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsActive("inactive");
      setShowComments("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOffClick);

    return () => {
      document.removeEventListener("click", handleOffClick);
    };
  }, [ref]);

  const toggleComments = (e) => {
    e.stopPropagation();

    if (showComments === "hidden") {
      dispatch(fetchComments(props.permalink));
      setShowComments("show");
    }
    if (showComments === "show") {
      setShowComments("hidden");
    }
  };

  const handleClick = () => {
    if (isActive === "inactive") {
      setIsActive("active");
      document
        .getElementById(props.title)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (isActive === "active") {
      setIsActive("inactive");
    }
    if (showComments === "show") {
      setShowComments("hidden");
    }
  };

  if (props.thumbnail) {
    thumbnail = props.thumbnail;
  }
  if (props.thumbnail.includes("nsfw")) {
    thumbnail = "/nsfw.png";
  }
  if (props.thumbnail.includes("spoiler")) {
    thumbnail = "/warning.png";
  }
  if (props.thumbnail.includes('external') || props.thumbnail.includes('self') || props.thumbnail.includes('default') || !props.thumbnail) {
    thumbnail = "/favicon.png";
  }

  if (props.score > 9999) {
    const string = props.score.toString();
    const slice = string.slice(0, 2) + "." + string.slice(2);
    score = slice.slice(0, 4) + "k";
  } else score = props.score;

  const content = () => {
    if (props.mediaType === "image") {
      return <img src={props.url} alt="" loading='lazy' width="auto" height="auto"></img>;
    }

    if (props.mediaType === "hosted:video") {
      return (
        <video className="reddit-video" preload="none" controls >
          <source
            src={props.media.reddit_video.fallback_url}
            type="video/mp4"
          ></source>
        </video>
      );
    }

    if (props.mediaType === "link") {
      return (
        <div className="link">
          <p>Click for full article</p>
          <a href={props.url} target="_blank" rel="noreferrer">
            <img src={thumbnail} alt="thumbnail of linked article" width="auto" height="auto"></img>
          </a>
        </div>
      );
    }

    if (props.isGallery === true) {
      return (
        <div className="gallery">
          <p>Click for full gallery</p>
          <a href={props.url} target="_blank" rel="noreferrer">
            <img src={thumbnail} alt="thumbnail of gallery of images" width="auto" height="auto"></img>
          </a>
        </div>
      );
    }

    if (props.text) {
      return (
        <div className="text">
          <p>{props.text}</p>
        </div>
      );
    }
  };

  commentList =
    !posts.comments || !posts.comments.length ? (
      <div className={showComments} id="comments">
      <NoComments />
      </div>
    ) : (
      posts.comments.slice(0, 11).map((comment) => {
        return (
          
          <Comment
            key={comment.id}
            body={comment.body}
            author={comment.author}
            score={comment.ups}
          />
        );
      })
    );

  if (posts.commentsLoading) {
    return (
      <li
        className={isActive}
        id={props.title}
        onClick={handleClick}
        data-testid={"postShowing"}
      >
        <div className="post" id={isActive}>
          <div className="left-side">
            <img src={thumbnail} alt="thumbnail of post content" width="100%" height="auto"></img>
          </div>
          <div className="right-side">
            <div className="top">
              <p
                className="subreddit"
                onClick={() => dispatch(setSelectedSubreddit(props.subreddit))}
              >
                {props.subreddit}
              </p>
              <p className="author">OP: u/{props.author}</p>
            </div>
            <div className="bottom">
              <h3 className="title">{props.title}</h3>
            </div>
            <div className="content">{content()}</div>
          </div>
          <button
            className="comments-toggle"
            onClick={(e) => toggleComments(e)}
          >
            <Chats size={28} />
          </button>
          <div className="score">
            <ArrowCircleUp size={24} />
            <p>{score}</p>
          </div>
        </div>
        <div className={showComments} id="comments">
          <CommentsLoading />
          <CommentsLoading />
          <CommentsLoading />
          <CommentsLoading />
          <CommentsLoading />
          <CommentsLoading />
          <CommentsLoading />
        </div>
      </li>
    );
  } else {
    return (
      <li
        className={isActive}
        id={props.title}
        onClick={handleClick}
        ref={ref}
        data-testid={"postShowing"}
      >
        <div className="post" id={isActive}>
          <div className="left-side">
            <img src={thumbnail} alt="" width="200" height="auto"></img>
          </div>
          <div className="right-side">
            <div className="top">
              <p
                className="subreddit"
                onClick={() => dispatch(setSelectedSubreddit(props.subreddit))}
              >
                {props.subreddit}
              </p>
              <p className="author">u/{props.author}</p>
            </div>
            <div className="bottom">
              <h3 className="title">{props.title}</h3>
            </div>
            <div className="content">{content()}</div>
          </div>
          <button
            className="comments-toggle"
            onClick={(e) => toggleComments(e)}
          >
            <Chats size={28} />
          </button>
          <div className="score">
            <ArrowCircleUp size={"55%"} />
            <p>{score}</p>
          </div>
        </div>
        <div className={showComments} id="comments">
          <ul>{commentList}</ul>
        </div>
      </li>
    );
  }
};
