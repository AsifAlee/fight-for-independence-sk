import React from "react";
import PopUp from "../components/PopUp";
import bg from "../assets/popup/popup-bg.png";
import congTag from "../assets/popup/congratulation.png";
const RecvCardPopup = ({ popUpHandler, title, isCardsFinished }) => {
  return (
    <PopUp bg={bg} title={title} popUpHandler={popUpHandler} isCollSold={true}>
      <div className="recv-card-popup">
        {isCardsFinished ? (
          <p>
            You have finished sending all the five Independence day cards in
            your account. You can purchase new cards & send them again. With the
            help of a card you help your favourite talent rank the leaderboard.{" "}
          </p>
        ) : (
          <p>
            {" "}
            Let us celebrate the spirit of Independence Day as your Card has
            been received by the talent successfully!
          </p>
        )}
      </div>
    </PopUp>
  );
};

export default RecvCardPopup;
