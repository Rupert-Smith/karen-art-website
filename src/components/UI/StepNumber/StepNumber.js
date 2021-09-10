import React from "react";
import classes from "./StepNumber.module.css";

function StepNumber(props) {
  return (
    <div className={`${classes.stepNumber} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default StepNumber;
