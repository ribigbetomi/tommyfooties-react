import React, { useState } from "react";
import BestSellingSlider from "./bestSellingSlider";
import Slider from "./slider";
import LoafersFeaturedProducts from "./loafersFeaturedProducts";
import SlippersFeaturedProducts from "./slippersFeaturedProducts";
import BootsFeaturedProducts from "./bootsFeaturedProducts";

const FeaturedProducts = () => {
  const [content, setContent] = useState("Boots");
  const [active, isActive] = useState(false);

  const activeBoots = () => {
    if (content === "boots") {
      isActive(true);
    }
  };

  return (
    <div className="featured-products">
      <div className="featured-header">Featured Products</div>
      <div className="featured">
        <div className="grid grid--1x3">
          <button
            className={
              `${content}` === "Boots" ? "btn btn-black" : "btn btn-white"
            }
            onClick={() => setContent("Boots")}
          >
            Loafers
          </button>
          <button
            className={
              `${content}` === "Sneakers" ? "btn btn-black" : "btn btn-white"
            }
            onClick={() => setContent("Sneakers")}
          >
            Slippers
          </button>
          <button
            className={
              `${content}` === "Safety" ? "btn btn-black" : "btn btn-white"
            }
            onClick={() => setContent("Safety")}
          >
            Boots
          </button>
        </div>
      </div>
      <div>
        <div> {content === "Boots" && <LoafersFeaturedProducts />} </div>
        <div>{content === "Sneakers" && <SlippersFeaturedProducts />} </div>
        <div>{content === "Safety" && <BootsFeaturedProducts />} </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
