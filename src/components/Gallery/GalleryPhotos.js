import React from "react";
import Section from "../UI/Section/Section";
import BlackAndWhiteGallery from "./BlackAndWhiteGallery/BlackAndWhiteGallery";
import ColorGallery from "./ColorGallery/ColorGallery";
import PortraitsWithYou from "./PortraitsWithYou/PortraitsWithYou";
import OtherPets from "./OtherPets/OtherPets";
import BehindTheScenes from "./BehindTheScenes/BehindTheScenes";
import Fade from "react-reveal/Fade";

import "../../assets/styles/css/main.css";

function GalleryPhotos(props) {
  return (
    <Section id="gallery-photos">
      <Fade>
        <ColorGallery />
      </Fade>
      <Fade>
        <BlackAndWhiteGallery />
      </Fade>
      <Fade>
        <OtherPets />
      </Fade>
      <Fade>
        <PortraitsWithYou />
      </Fade>
      <Fade>
        <BehindTheScenes />
      </Fade>
    </Section>
  );
}

export default GalleryPhotos;
