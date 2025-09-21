import React from "react";

const Toast = ({ message, type = "info" }) => {
  // Map toast types to classes
  const typeClasses = {
    success: "alert alert-success",
    error: "alert alert-error",
    warning: "alert alert-warning",
    info: "alert alert-info",
  };

  return (
    <div className="toast toast-top toast-end">
      <div className={typeClasses[type] || typeClasses.info}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
