"use client";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";

const Toast = ({ message, onClose, show, type }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true); 
      const timer = setTimeout(() => {
        setIsVisible(false);  
        onClose(); 
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const renderIcon = () => {
    switch (type) {
      case "success":
        return <FaCheckCircle />;
      case "error":
        return <FaExclamationCircle />;
      default:
        return <FaInfoCircle />;
    }
  };

  return (
    <div
      id="toast"
      className={`${isVisible ? "show" : ""} ${type}`}
    >
      {renderIcon() && <div id="icon">{renderIcon()}</div>}
      <div id="text">{message}</div>
    </div>
  );
};

export default Toast;
