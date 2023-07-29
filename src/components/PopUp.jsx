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
              ? "102vw"
              : isGame
              ? "63vw"
              : isMilestone
              ? "83vw"
              : ""
          }`,
          width: `${
            isAccPopUp ? "85%" : isRewards ? "85%" : isMilestone ? "98%" : ""
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
