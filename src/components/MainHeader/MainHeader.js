import React from "react";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
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
      <MobileNavigation />
      <Hero />
    </header>
  );
};

export default MainHeader;
