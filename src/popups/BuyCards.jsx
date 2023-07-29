import React from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/popup/popup-bg.png";
import congTag from "../assets/popup/congratulation.png";
const BuyCard = ({ popUpHandler, title, cardsCount }) => {
  return (
    <PopUp bg={bg} title={title} popUpHandler={popUpHandler} isCollSold={true}>
      <div className="buy-card-popup"></div>
    </PopUp>
  );
};

export default BuyCard;
