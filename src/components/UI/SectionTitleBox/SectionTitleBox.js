import React from "react";
import classes from "./SectionTitleBox.module.css";

function SectionTitleBox(props) {
  return (
    <div className={`${classes.sectionTitleBox} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default SectionTitleBox;
