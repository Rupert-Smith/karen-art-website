import React from "react";
import classes from "./SectionParagraph.module.css";

function SectionParagraph(props) {
  return (
    <p className={`${classes.sectionParagraph} ${props.className}`}>
      {props.children}
    </p>
  );
}

export default SectionParagraph;
