import React from "react";
import Gallery from "react-grid-gallery";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../../UI/SectionTitleBox/SectionTitleBox";
import styles from "./_black-and-white-gallery.module.scss";

import BLACKANDWHITEIMAGES from "../../../assets/images/gallery/black-and-white/index";

function BlackAndWhiteGallery(props) {
  const blackAndWhiteImageCollection = [];

  for (const [key, value] of Object.entries(BLACKANDWHITEIMAGES)) {
    if (key.includes("wide")) {
      blackAndWhiteImageCollection.push({
        src: value,
        thumbnail: value,
        thumbnailWidth: 672,
        thumbnailHeight: 520,
        customOverlay: <div className={styles["image-overlay"]}></div>,
      });
      continue;
    }
    blackAndWhiteImageCollection.push({
      src: value,
      thumbnail: value,
      thumbnailWidth: 412,
      thumbnailHeight: 520,
      customOverlay: <div className={styles["image-overlay"]}></div>,
    });
  }

  return (
    <div id="black-and-white-wrapper" className={styles["gallery-wrapper"]}>
      <SectionTitleBox className={styles["gallery-title-wrapper"]}>
        <SectionTitle className={styles["gallery-title"]}>
          Dog Pencil portraits - black and white
        </SectionTitle>
      </SectionTitleBox>
      <Gallery
        rowHeight={290}
        className="black-and-white-photos"
        images={blackAndWhiteImageCollection}
        backdropClosesModal={true}
        enableImageSelection={false}
      />
      ,
    </div>
  );
}

export default BlackAndWhiteGallery;
