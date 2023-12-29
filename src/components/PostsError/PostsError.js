import React from "react";
import "./PostsError.css";
import { FileX } from "@phosphor-icons/react";

export const PostsError = () => {
  return (
    <div className="posts-error" data-testid={"postError"}>
      <FileX size={28} />
      <h4>Sorry... that subreddit could not be found</h4>
    </div>
  );
};
