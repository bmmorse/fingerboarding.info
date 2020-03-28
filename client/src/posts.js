import React from "react";
import images from "./images";

const POST__DATA = [
  {
    date: "March 3",
    company: "Darkwood Fingerboards",
    post__img: images.posts.darkwood_030320,
    company__logo: images.companies.darkwood_logo
  },
  {
    date: "March 3",
    company: "Darkwood Fingerboards",
    post__img: images.posts.darkwood_030320,
    company__logo: images.companies.darkwood_logo
  }
];

/**
 * takes a data object, returns a Post component
 */
function Post(props) {
  return (
    <div className="post">
      <h3>March 11</h3>
      <img src={images.posts.darkwood_030320} alt="" />
      <div className="post__desc">
        <img src={images.companies.darkwood_logo} alt="" />
        <div className="desc">
          <h4>Darkwood Fingerboards</h4>
          <p>
            New stock - CNC laser engraved graphics, RARE Surrealist art
            including MC Escher stairs
          </p>
          <div className="links">
            <img className="shopping" src={images.site.shopping} alt="" />
            <img className="instawhite" src={images.site.instawhite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
