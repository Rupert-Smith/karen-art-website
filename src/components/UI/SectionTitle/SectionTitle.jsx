import React from "react";
import "../../../assets/styles/css/main.css";
import Fade from "react-reveal/Fade";

function SectionTitle(props) {
  return (
    <Fade>
      <h2
        className={`sectionTitle ${props.className}`}
      >{`${props.children}`}</h2>
    </Fade>
  );
}

export default SectionTitle;
