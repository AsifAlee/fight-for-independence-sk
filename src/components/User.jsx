import React from "react";
import "../styles/user.scss";
import frame from "../assets/card/TalentFrame.png";
import unknownUser from "../assets/unknown-user.png";
const User = ({ user, sendCard, isDisabled }) => {
  return (
    <div className="user">
      <div className="images">
        <img
          src={
            user.portrait_path_original
              ? user.portrait_path_original
              : unknownUser
          }
          alt=""
          className="avatar"
        />
        <img alt="" className="frame" src={frame} />
      </div>
      <span className="name">{user?.nickname}</span>
      <button
        className="send-btn"
        onClick={sendCard}
        disabled={isDisabled}
        style={{ filter: isDisabled && "grayScale(1)" }}
      />
    </div>
  );
};

export default User;
