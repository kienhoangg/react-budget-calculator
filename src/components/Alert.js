import React from "react";

export const Alert = ({ type, message }) => {
  console.log(type, message);
  return <div className={`alert alert-${type}`}>{message}</div>;
};
export default Alert;
