import React, { useState, useEffect } from "react";
import "../styles/toast.css";

const Toast = ({ message, time }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    time = setTimeout(() => {
      setVisible(false);
      clearTimeout(time);
    }, 2000);
    // return () => clearTimeout(time);
  }, [message]);

  return (
    <>
      {visible && (
        <div className="toast-container">
          <div className="toast">
            <div className="toast-message">{message}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
