import React from "react";
import beansPot from "../assets/event-gifting/beans-pot.png";

const BeansPot = () => {
  return (
    <div className="beanspot-container">
      <img src={beansPot} className="beans-pot-img" />
      <div className="right-div">
        <div className="beans-counter">
          <span> 000,000,00</span>
        </div>
        <p className="beanspot-text">
          Overall Beans Pot will be rewarded to top 5 users ranking on the
          hourly leaderboard
        </p>
      </div>
    </div>
  );
};

export default BeansPot;
