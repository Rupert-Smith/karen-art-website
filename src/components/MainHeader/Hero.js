import React from "react";
import LinkButton from "../UI/LinkButton";
import "../../assets/styles/css/main-header.css";

const Hero = (props) => {
  const classes = props.className;

  return (
    <div className={classes}>
      <div className="hero-text-box-container">
        <div className="hero-text-box">
          <h2 className="hero-tagline">
            Capture your pet with a <br></br>custom pencil portrait
          </h2>
          <LinkButton className="hero-link-button link-button-full">
            Draw my pet
          </LinkButton>
          <LinkButton className="hero-link-button link-button-ghost">
            Show me more
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
