import React, { useState } from "react";
import { dataSlider } from "./dataslider";
import BtnSlider from "./btnSlider";
import { infoSlider } from "./infoSlider";
import { Link } from "react-router-dom";

const BestSellingSlider = () => {
  const [slideIndex, setSlideIndex] = useState(2);

  const nextSlide = () => {
    if (slideIndex <= infoSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === infoSlider.length + 1) {
      setSlideIndex(2);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 2) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 2) {
      setSlideIndex(infoSlider.length + 1);
    }
  };
  return (
    <div className="container-slider">
      {infoSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 2
                ? "slide active-anim grid grid--1x2"
                : "slide"
            }
          >
            <div className="best-seller-img">
              {/* <Link to={`/shoe/${slideIndex - 1}`}> */}
              <div className="best-seller_img">
                <img src={obj[`image${index + 1}`]} alt="" />
              </div>
              <div className="best-seller-title">
                {obj[`title${index + 1}`]}
              </div>
              {/* {console.log(slideIndex, index)} */}
              {/* </Link> */}
            </div>
            <div className="best-seller-img">
              {/* <Link to={`/shoe/${slideIndex}`}> */}
              <div className="best-seller_img">
                <img src={obj[`image${index + 2}`]} alt="" />
              </div>
              <div className="best-seller-title">
                {obj[`title${index + 2}`]}
              </div>
              {/* </Link> */}
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default BestSellingSlider;
