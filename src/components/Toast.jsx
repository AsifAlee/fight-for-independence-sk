import React, { useState, useEffect } from "react";
import "../styles/toast.css";

const Toast = ({ message, duration = 5000, closeToast }) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

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
