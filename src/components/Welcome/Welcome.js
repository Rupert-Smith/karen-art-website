import React from "react";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import "../../assets/styles/css/main.css";
import Section from "../UI/Section/Section";
import SectionParagraph from "../UI/SectionParagraph/SectionParagraph";

import dogIcon from "../../assets/images/icons/dog-icon.png";

function Welcome(props) {
  return (
    <Section id="welcome">
      <SectionTitleBox className="welcome-title-box">
        <SectionTitle>
          Welcome to Karen Reep Art: Creating Memories
        </SectionTitle>
      </SectionTitleBox>

      <SectionParagraph className="welcome-paragraph">
        Hi, this is Karen. <strong>Welcome to my website</strong>. I am a sister
        on a paediatric ward and drawing animals is my secret passion. I’ll draw
        your pet for a fare price, just email me and send photos of your
        precious pet <img className="dog-icon" src={dogIcon} />
      </SectionParagraph>
    </Section>
  );
}

export default Welcome;
