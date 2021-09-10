import React from "react";
import "../../assets/styles/css/reviews.css";

function Reviews(props) {
  return (
    <section>
      <div className="review-banner">
        <h2>Reviews</h2>
      </div>
      <div className="review-block-container">
        <div className="review-block">
          <h3>Amazing!</h3>
          <blockquote>
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </blockquote>
          <cite>Chris Carey</cite>
        </div>
        <div className="review-block">
          <h3>Wonderful gift</h3>
          <blockquote>
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </blockquote>
          <cite>Lhara Kavanagh</cite>
        </div>
        <div className="review-block">
          <h3>Excellent quality</h3>
          <blockquote>
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </blockquote>
          <cite>Sam Fitzgerald</cite>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
