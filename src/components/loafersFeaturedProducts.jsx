import React from "react";
import { imagesData } from "./imagesData";
import { Link } from "react-router-dom";

const LoafersFeaturedProducts = () => {
  return (
    <div className="category-container">
      <div className="grid--1x2 grid-gap">
        <div className="category-image">
          <Link to="/shoe/34" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[33].image} />
            </div>
            <div className="category-image-men">
              Black Leather Loafers with Tassels
            </div>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/shoe/35" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[34].image} alt="" />
            </div>
            <div className="category-image-men">
              Black Glossy & Croc-Skin Loafers with Tassels
            </div>
          </Link>
        </div>
        <div className="category-image">
          <Link to="/shoe/20" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src="/images/IMG13.jpg" />
            </div>
            <div className="category-image-men">
              Nude Suede Loafers with Tassels
            </div>
          </Link>
        </div>
        <div className="category-image">
          <Link to="/shoe/6" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[5].image} />
            </div>
            <div className="category-image-men">
              Black Croc-Skin Leather Loafers with Horse-bit Chain{" "}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoafersFeaturedProducts;
