import React from "react";
import { baseUrl } from "../utils/api";
import beanIcon from "../assets/event-gifting/bean-icon.png";

const Gift = ({ name, id, price }) => {
  return (
    <div className="single-gift">
      <div className="gift-bg">
        <img src={`${baseUrl}streamkar/gifts/${id}.png`} />
      </div>
      <div className="gift-details">
        <p>{name}</p>
        <div style={{ display: "flex" }}>
          <p> {price}</p>
          <img src={beanIcon} style={{ width: "4vw" }} />
        </div>
      </div>
    </div>
  );
};

export default Gift;
