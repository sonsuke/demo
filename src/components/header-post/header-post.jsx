import React from "react";
import "../../styles/header.css";
const HeaderPost = ({ onCreateClick, onLogout }) => {
  return (
    <div className="header__wrapper">
      <h1 className="header__title">Post Demo</h1>
      <div>
        <button className="header__button" onClick={onCreateClick}>
          Create
        </button>
        <button className="header__logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderPost;
