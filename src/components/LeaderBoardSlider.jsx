import React, { useEffect, useRef, useState } from "react";
import "../styles/leaderboard-slider.scss";
import LeaderboardSliderItem from "./LeaderboardSliderItem";

const LeaderBoardSlider = ({ rewards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideInterval = 2000;
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rewards?.length);
    }, slideInterval);

    return () => {
      clearInterval(slideTimer);
    };
  }, [rewards?.length, slideInterval]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      sliderRef?.current?.classList?.remove("sliding");
    };

    sliderRef?.current?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderRef?.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, []);

  return (
    <div className="leaderboard-slider">
      <div
        ref={sliderRef}
        className="slider-wrapper"
        style={{
          transition: "transform 0.5s ease",
          display: "flex",
          position: "relative",
          right: "-5vw",
          top: "1vw",
        }}
      >
        {rewards?.length > 1 &&
          rewards[currentIndex]?.map((item, index) => (
            <LeaderboardSliderItem />
          ))}
      </div>
    </div>
  );
};

export default LeaderBoardSlider;
