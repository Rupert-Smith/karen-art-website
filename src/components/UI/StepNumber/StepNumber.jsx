import React from "react";
import "../../../assets/styles/css/main.css";
import styles from "./_step-number.module.scss";

function StepNumber(props) {
  return <div className={`${styles["stepNumber"]}`}>{props.children}</div>;
}

export default StepNumber;
