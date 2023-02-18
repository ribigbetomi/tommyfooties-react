import React from "react";
import { imagesData } from "./imagesData";
import { Link } from "react-router-dom";

const BootsFeaturedProducts = () => {
  return (
    <div className="category-container">
      <div className="grid--1x2 grid-gap">
        <div className="category-image">
          <Link to="/shoe/38" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[37].image} />
            </div>
            <div className="category-image-men">Brown Suede Desert Boots</div>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/shoe/12" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[11].image} alt="" />
            </div>
            <div className="category-image-men">Brown Suede Chelsea Boots</div>
          </Link>
        </div>
        <div className="category-image">
          <Link to="/shoe/13" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src="/images/IMG25.jpg" />
            </div>
            <div className="category-image-men">Brown Suede Chukka Boots</div>
          </Link>
        </div>
        <div className="category-image">
          <Link to="/shoe/10" style={{ textDecoration: "none" }}>
            <div className="category_img">
              <img src={imagesData[9].image} />
            </div>
            <div className="category-image-men">
              Gray Suede Chelsea Boots with Buckle
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BootsFeaturedProducts;
