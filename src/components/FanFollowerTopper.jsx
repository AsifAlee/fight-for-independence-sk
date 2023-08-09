import React, { useContext } from "react";
import top1Frame from "../assets/top-1-frame.png";
import bean from "../assets/event-gifting/bean-icon.png";

import unknownUser from "../assets/unknown-user.png";
import "../styles/topper.scss";
import followBtn from "../assets/fanfollowers/follow-btn.png";
import followedBtn from "../assets/fanfollowers/followed.png";
import { getLevelImage, gotoProfile } from "../utils/functions";
import { AppContext } from "../AppContext";

const FanFollwerTopper = ({ theUser, isUser, followTalent }) => {
  const { user } = useContext(AppContext);
  return (
    <div className="fan-follower-topper">
      <div
        className="topper-images"
        onClick={() => gotoProfile(theUser.userId)}
      >
        <img src={top1Frame} className="frame" />
        <img
          src={theUser?.portrait ? theUser?.portrait : unknownUser}
          className="avatar"
        />
      </div>
      <div
        className="topper-details"
        // onClick={() => gotoProfile(theUser?.userId)}
      >
        <div className="nameLevel">
          <p className="name">{theUser?.nickname}</p>
          <img
            src={getLevelImage(
              isUser === true ? theUser?.userLevel : theUser?.actorLevel,
              isUser === true ? false : true
            )}
          />
        </div>
        {isUser === false && (
          <img
            src={theUser?.isFollow ? followedBtn : followBtn}
            style={{
              width: "7vw",
              position: "relative",
              left: "-5vw",
              visibility: user?.userId == theUser.userId ? "hidden" : "",
            }}
            onClick={() =>
              followTalent(
                theUser?.userId,
                theUser?.nickname,
                theUser?.isFollow
              )
            }
          />
        )}

        {isUser === true ? (
          <div className="beans-won">
            Win 40,000 <img src={bean} />
          </div>
        ) : (
          ""
        )}

        <div className="soldier-collected">
          {isUser ? (
            <span> Cards Sent:{theUser?.userScore}</span>
          ) : (
            <span>Card Receieved:{theUser?.userScore}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FanFollwerTopper;
