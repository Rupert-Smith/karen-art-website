import React from "react";

import MainHeader from "../components/MainHeader/MainHeader";
import "../assets/styles/css/main.css";
import Contact from "../components/Contact/Contact";
import KarenFooter from "../components/KarenFooter/KarenFooter";
import RupertFooter from "../components/RupertFooter/RupertFooter";
import Pricing from "../components/Pricing/Pricing";

function Prices(props) {
  return (
    <>
      <MainHeader contactId={"prices-contact"} heroId="prices" />
      <Pricing />
      <Contact id="prices-contact" />
      <KarenFooter />
      <RupertFooter />
    </>
  );
}

export default Prices;
