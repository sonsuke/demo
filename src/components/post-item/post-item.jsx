import React from "react";
import "../../styles/post-item.css";
const PostItem = ({ index, post, onEditClick, onDeleteClick }) => {
  return (
    <div className="post__wrap">
      <div className="post__head">
        <h3 className="post__title">{post?.title}</h3>
        <div className="post__button--group">
          <button className="post__edit" onClick={() => onEditClick(index)}>
            Edit
          </button>
          <img
            className="post__delete"
            src="/remove.png"
            alt=""
            onClick={() => onDeleteClick(index)}
          />
        </div>
      </div>
      <p className="post__content">{post?.content}</p>
    </div>
  );
};

export default PostItem;
