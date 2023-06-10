import React from "react";
import "../../assets/styles/css/main.css";
import styles from "./_reviews.module.scss";

function Reviews(props) {
  return (
    <section className={styles["review-section"]}>
      <div className={styles["review-banner"]}>
        <h2>Reviews</h2>
      </div>
      <div className={styles["review-block-container"]}>
        <div className={styles["review-block"]}>
          <h3>Outstanding</h3>
          <blockquote>
            Karen's work is outstanding, I am so happy with the two drawings she
            has done for me.
          </blockquote>
          {/* <cite>Chris Carey</cite> */}
        </div>
        <div className={styles["review-block"]}>
          <h3>Lovely drawing</h3>
          <blockquote>
            Karen thank you so much for my lovely drawing of my Ampthill bull.
            It makes me smile looking at his beautiful face every day x
          </blockquote>
          {/* <cite>Lhara Kavanagh</cite> */}
        </div>
        <div className={styles["review-block"]}>
          <h3>Amazing!</h3>
          <blockquote>
            Frankie loved her picture! Thanks Karen Reep, amazing!!! x
          </blockquote>
          {/* <cite>Sam Fitzgerald</cite> */}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
