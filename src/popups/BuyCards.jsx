import React from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/popup/popup-bg.png";
import congTag from "../assets/popup/congratulation.png";
const BuyCard = ({ popUpHandler, title, errorCode }) => {
  return (
    <PopUp bg={bg} title={title} popUpHandler={popUpHandler} isCollSold={true}>
      <div className="buy-card-popup">
        {errorCode === 0 ? (
          <p>
            We’ve received 10000 Beans successfully and we have credited 5 cards
            to your account.
          </p>
        ) : (
          <p>Something went wrong</p>
        )}
      </div>
    </PopUp>
  );
};

export default BuyCard;
