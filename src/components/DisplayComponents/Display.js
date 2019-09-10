import React from "react";

const Display = (props) => {
  const displayArr = props.displayArr;
  return <div className="display">{displayArr.map(num => num)}</div>;
};

export default Display;