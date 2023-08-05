import React, { useEffect } from "react";
import "../styles/popup.scss";
const PopUp = (props) => {
  const {
    children,
    bg,
    title,
    popUpHandler,
    isAccPopUp,
    isRewards,
    isGame,
    isMilestone,
    isCollSold,
    isSendCard,
    isOverflow,
    isSendCardPopup,
    isRewardHist,
  } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overlay">
      <div
        className="content"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: `${
            isCollSold
              ? "57vw"
              : isSendCard
              ? "80vw"
              : isGame
              ? "63vw"
              : isRewardHist
              ? "90vw"
              : ""
          }`,
          height: isSendCard && "102vw",
          width: `${
            isSendCardPopup
              ? "95%"
              : isRewards
              ? "85%"
              : isMilestone
              ? "98%"
              : isRewardHist
              ? "97vw"
              : ""
          }`,
          overflowY: isOverflow ? "auto" : "",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            marginTop: "-2vw",
            justifyContent: "center",
          }}
        >
          <img
            src={title}
            className="title"
            style={{ visibility: title ? "visible" : "hidden" }}
          />
        </div>
        {children}
      </div>
      <button className="closeBtn" onClick={popUpHandler}></button>
    </div>
  );
};

export default PopUp;
