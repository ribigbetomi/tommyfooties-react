import React from "react";
import { Link } from "react-router-dom";
import { imagesData } from "./imagesData";

const Categories = () => {
  return (
    <div className="shop-category">
      <div className="category">Shop By Category</div>
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
                <img src={imagesData[34].image} alt="" />
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
          <div className="category-image">
            <Link to="/men-monkstrap" style={{ textDecoration: "none" }}>
              <div className="category_img">
                <img src={imagesData[6].image} />
              </div>
              <div className="category-image-men">Men's Monkstrap</div>
            </Link>
          </div>
          <div className="category-image">
            <Link to="/men-slippers" style={{ textDecoration: "none" }}>
              <div className="category_img">
                <img src={imagesData[7].image} />
              </div>
              <div className="category-image-men">Men's Slippers</div>
            </Link>
          </div>
          <div className="category-image">
            <Link to="/men-boots" style={{ textDecoration: "none" }}>
              <div className="category_img">
                <img src={imagesData[11].image} />
              </div>
              <div className="category-image-men">Men's Boots</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
