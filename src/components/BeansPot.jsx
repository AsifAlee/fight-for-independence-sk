import React from "react";
import beansPot from "../assets/event-gifting/beans-pot.png";

const BeansPot = ({ potValue, isTalent }) => {
  return (
    <div className="beanspot-container">
      <img src={beansPot} className="beans-pot-img" />
      <div className="right-div">
        <div className="beans-counter">
          <span>{potValue}</span>
        </div>
        <p className="beanspot-text">
          Overall Beans Pot will be rewarded to top 5{" "}
          {isTalent ? "talents" : "users"} ranking on the overall leaderboard
        </p>
      </div>
    </div>
  );
};

export default BeansPot;
