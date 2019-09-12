import React from "react";

const NumberButton = (props) => {
  const { numberName, displayNum, displayArr}= props;
  return (
    <div className ="number-button" onClick={evt => displayNum(evt.target.innerHTML)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {numberName}
    </div>
  );
};

export default NumberButton;