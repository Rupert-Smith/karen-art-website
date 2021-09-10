import React from "react";
import Navigation from "./Navigation";
import Title from "./Title";
import Hero from "./Hero";
import SocialMediaColorIcons from "./SocialMediaColorIcons";

const MainHeader = (props) => {
  const classes = "home-dog-hero " + props.className;

  return (
    <header className={classes}>
      <SocialMediaColorIcons />
      <Title />
      <Navigation />
      <Hero />
    </header>
  );
};

export default MainHeader;
