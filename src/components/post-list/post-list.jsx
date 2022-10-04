import React from "react";
import PostItem from "../post-item/post-item";
import "../../styles/post-list.css";

const PostList = ({ list, onEditClick, onDeleteClick }) => {
  return (
    <div className="post__list--wrap">
      {list.map((post, index) => (
        <PostItem
          index={index}
          onEditClick={() => onEditClick(index)}
          onDeleteClick={() => onDeleteClick(index)}
          key={index}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
