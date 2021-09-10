import React from "react";
import classes from "./SectionTitle.module.css";

function SectionTitle(props) {
  return (
    <h2
      className={`${classes.sectionTitle} ${props.className}`}
    >{`${props.children}`}</h2>
  );
}

export default SectionTitle;
