import React, { useState } from "react";

const RadioSelect = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <>
      {options.map((option, index) => (
        <div
          onClick={() => handleOptionClick(option)}
          style={{
            width: "30vw",
            height: "21vw",
            backgroundColor: "red",
          }}
        >
          {option}
        </div>
      ))}
    </>
  );
};

export default RadioSelect;
