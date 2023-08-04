import React from "react";
import "../styles/leaderboard-item.scss";
import top2 from "../assets/top-2-frame.png";
import top3 from "../assets/top-3-frame.png";
import bean from "../assets/event-gifting/bean-icon.png";
import followBtn from "../assets/fanfollowers/follow-btn.png";
import followedBtn from "../assets/fanfollowers/followed.png";
import unknownUser from "../assets/unknown-user.png";
import beanIcon from "../assets/event-gifting/bean-icon.png";
import { getLevelImage, gotoProfile } from "../utils/functions";

const FanFollowerLbItem = ({ user, index, isUser, followTalent }) => {
  return (
    <div className="fan-follower-lb-item">
      <div className="left-div" style={{ marginLeft: index > 3 && "-6vw" }}>
        {index > 3 && <span className="index">{index}</span>}
        <div className="images" onClick={() => gotoProfile(user?.userId)}>
          <img
            src={user?.portrait ? user?.portrait : unknownUser}
            className="avatar"
          />
          {index <= 3 && (
            <img
              src={index === 2 ? top2 : top3}
              className="frame"
              style={{ visibility: index > 3 ? "gone" : "" }}
            />
          )}
        </div>
        <div className="nameNLevel">
          <span className="name">{user?.nickname}</span>
          <img
            src={getLevelImage(
              isUser ? user?.userLevel : user?.actorLevel,
              isUser === true ? false : true
            )}
          />
        </div>
        {/* <span className="name">{user?.nickname}</span> */}
        {isUser === false && (
          <img
            style={{ width: "7vw" }}
            src={user?.isFollow === true ? followedBtn : followBtn}
            onClick={() =>
              followTalent(user?.userId, user?.nickname, user?.isFollow)
            }
          />
        )}
      </div>

      <div className="middle-div" style={{ visibility: index > 5 && "hidden" }}>
        {isUser === true ? (
          <div className="beans-won">
            {index === 2
              ? "Win 15,000"
              : index === 3
              ? "Win 10,000"
              : index === 4
              ? "Win 10,000"
              : index === 5
              ? "Win 5,000"
              : ""}
            <img src={bean} />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="right-div">
        {isUser ? (
          <span>Cards Sent:{user?.userScore}</span>
        ) : (
          <span>Cards Recieved:{user?.userScore}</span>
        )}
      </div>
    </div>
  );
};

export default FanFollowerLbItem;
