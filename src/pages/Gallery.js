import React, { Fragment } from "react";

import MainHeader from "../components/MainHeader/MainHeader";
import "../assets/styles/css/main.css";
import Contact from "../components/Contact/Contact";
import KarenFooter from "../components/KarenFooter/KarenFooter";
import RupertFooter from "../components/RupertFooter/RupertFooter";

function Home(props) {
  return (
    <Fragment>
      <MainHeader className="gallery-dog-hero" />
      <Contact id="gallery-contact" />
      <KarenFooter />
      <RupertFooter />
    </Fragment>
  );
}

export default Home;
