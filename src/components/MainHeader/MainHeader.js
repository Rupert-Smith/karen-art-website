import React from "react";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import Hero from "./Hero/Hero";
import SocialMediaColorIcons from "./SocialMediaColorIcons/SocialMediaColorIcons";
import Route from "react-router-dom";

const MainHeader = (props) => {
  const classes = "main-header-container " + props.className;

  return (
    <header className={classes}>
      <SocialMediaColorIcons />
      <Title />
      <Navigation contactId={props.contactId} />
      <Hero />
    </header>
  );
};

export default MainHeader;
