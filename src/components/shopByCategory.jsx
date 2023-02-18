import React from "react";
import { Link } from "react-router-dom";
// import { imagesData } from "./imagesData";
import { FaArrowRight } from "react-icons/fa";

const ShopByCategory = ({imagesData}) => {

  return (
    <div className="shop-category">
      <div className="category">Shop By Category</div>
      <Link
        to="/shoe-categories"
        style={{ textDecoration: "none", color: "black" }}
      >
        <span className="categories">
          CATEGORIES <FaArrowRight style={{ transform: "translateY(2px)" }} />{" "}
        </span>
      </Link>
      <div className="category-container">
        <div className="grid--1x2 grid-gap">
          <div className="category-image">
            <Link to="/men-mules" style={{ textDecoration: "none" }}>
              <div className="category_img">
                <img src={imagesData[28].image} />
              </div>
              <div className="category-image-men">Men's Mules</div>
            </Link>
          </div>

          <div className="category-image">
            <Link to="/men-loafers" style={{ textDecoration: "none" }}>
              <div className="category_img">
                <img src={imagesData[19].image} alt="" />
              </div>
              <div className="category-image-men">Men's Loafers</div>
            </Link>
          </div>
          <div className="category-image">
            <Link to="/men-laceup" style={{ textDecoration: "none" }}>
              <div className="category_img">
                <img src="/images/IMG4.jpg" />
              </div>
              <div className="category-image-men">Men's Lace-Up</div>
            </Link>
          </div>
          <div className="category-image">
            <Link to="/men-shoesandals" style={{ textDecoration: "none" }}>
              <div className="category_img">
                <img src={imagesData[4].image} />
              </div>
              <div className="category-image-men">Men's Shoe Sandals </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
