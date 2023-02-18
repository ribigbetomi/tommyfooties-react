import React from "react";
import { imagesData } from "./imagesData";
import { Link } from "react-router-dom";

const SlippersFeaturedProducts = () => {
  return (
    <div className="category-container">
      <div className="grid--1x2 grid-gap">
        <div className="category-image">
          <Link to="/shoe/8" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[7].image} />
            </div>
            <div className="category-image-men">
              Blue Suede Slippers with Horse-bit Chain
            </div>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/shoe/15" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[14].image} alt="" />
            </div>
            <div className="category-image-men">
              Black Suede Slippers with Buckle
            </div>
          </Link>
        </div>
        <div className="category-image">
          <Link to="/shoe/16" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src="/images/IMG24.jpg" />
            </div>
            <div className="category-image-men">
              Black Suede Double-Strapped Birkenstock Slippers
            </div>
          </Link>
        </div>
        <div className="category-image">
          <Link to="/shoe/17" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[16].image} />
            </div>
            <div className="category-image-men">
              Black Croc-Skin Leather Slippers
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlippersFeaturedProducts;
