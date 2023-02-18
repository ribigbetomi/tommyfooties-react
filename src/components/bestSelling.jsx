import React from "react";
import "./slider.css";
import BestSellingSlider from "./bestSellingSlider";

const BestSelling = () => {
  return (
    <div className="best-selling">
      <div className="best-selling-header">Best Selling</div>
      <div>
        <BestSellingSlider />
      </div>
    </div>
  );
};

export default BestSelling;
