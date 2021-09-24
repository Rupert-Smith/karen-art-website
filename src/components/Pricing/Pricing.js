import React from "react";
import Section from "../UI/Section/Section";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import SectionParagraph from "../UI/SectionParagraph/SectionParagraph";
import "../../assets/styles/css/main.css";
import pricingImage from "../../assets/images/pricing/dog6.jpg";

function Pricing(props) {
  return (
    <Section>
      <SectionTitleBox>
        <SectionTitle>How much will my portrait cost?</SectionTitle>
      </SectionTitleBox>
      <div className="pricing-wrapper">
        <SectionParagraph className="pricing-content">
          I charge between £100 to £120 per portrait on good quality A3 paper.
          Postage is 1st class recorded delivery at £10 I can take orders up to
          1 year in advance
        </SectionParagraph>
        <img src={pricingImage} />
      </div>
    </Section>
  );
}

export default Pricing;
