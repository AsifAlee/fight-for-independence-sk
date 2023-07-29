import React, { useEffect, useState } from "react";
import "../styles/slider.scss";
import leftArrow from "../assets/event-gifting/left-arrow.png";
import rightArrow from "../assets/event-gifting/right-arrow.png";
import SliderDot from "./SliderDot";
import { getRewardsImage } from "../utils/functions";

const RewardsSlider = ({ rewards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId = null;
  const nextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === rewards?.length - 1 ? 0 : prevState + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? rewards?.length - 1 : prevState - 1
    );
  };

  useEffect(() => {
    intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="slider">
      <img className="left-arrow" src={leftArrow} onClick={prevSlide} />
      <div className="slider-content">
        <div className="images">
          <img src={getRewardsImage(rewards[currentIndex]?.desc)} />
        </div>
        <p
          style={{
            width: "48vw",
            textAlign: "center",
            fontSize: "3vw",
          }}
        >
          {rewards[currentIndex].text}
        </p>
        <div className="indicators">
          {rewards.map((item, index) => (
            <SliderDot isActive={index === currentIndex} />
          ))}
        </div>
      </div>
      <img className="right-arrow" src={rightArrow} onClick={nextSlide} />
    </div>
  );
};

export default RewardsSlider;
