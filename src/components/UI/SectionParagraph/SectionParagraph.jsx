import React from "react";
import classes from "./SectionParagraph.module.css";
import Fade from "react-reveal/Fade";

function SectionParagraph(props) {
  return (
    <Fade>
      <p
        id={props.id}
        className={`${classes.sectionParagraph} ${props.className}`}
      >
        {props.children}
      </p>
    </Fade>
  );
}

export default SectionParagraph;
