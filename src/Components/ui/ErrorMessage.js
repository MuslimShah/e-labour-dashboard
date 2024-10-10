import React from "react";

const ErrorMessage = ({
  message = "Ooops! It look like something went wrong.",
}) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <h6>{message}</h6>
    </div>
  );
};

export default ErrorMessage;
