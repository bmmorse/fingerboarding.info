import React from "react";

const prefix = "https://s3.us-east-2.amazonaws.com/fingerboarding.info/img";
const images = {
  site: {
    logo: `${prefix}/site/logo_250.png`,
    instablack: `${prefix}/site/instablack_250.png`,
    instawhite: `${prefix}/site/instawhite_250.png`,
    shopping: `${prefix}/site/shopping_250.png`
  },

  featured: {
    lionelsimonfb: `${prefix}/featured/lionelsimonfb.jpg`
  },

  companies: {
    darkwood_logo: `${prefix}/companies/darkwood_logo.jpg`
  },

  posts: {
    darkwood_030320: `${prefix}/posts/darkwood_030320.jpg`
  }
};

export default images;
