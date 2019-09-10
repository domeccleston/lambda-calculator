import React from "react";

const NumberButton = (props) => {
  const {numberName, displayNum}= props;
  return (
    <div className ="number-button" onClick={evt => console.log(props)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {numberName}
    </div>
  );
};

export default NumberButton;