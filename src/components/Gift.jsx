import React from "react";
import { baseUrl } from "../utils/api";

const Gift = ({ name, id }) => {
  return (
    <div className="single-gift">
      <div className="gift-bg">
        <img src={`${baseUrl}streamkar/gifts/${id}.png`} />
      </div>
      <div className="gift-details">{name}</div>
    </div>
  );
};

export default Gift;
