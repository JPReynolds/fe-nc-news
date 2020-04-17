import React from 'react';

const ErrorDisplay = (props) => {
  const { status, msg } = props;
  return (
    <div>
      <h2>Something went wrong.....</h2>
      <p>Status: {status}</p>
      <p>msg: {msg}</p>
    </div>
  );
};

export default ErrorDisplay;
