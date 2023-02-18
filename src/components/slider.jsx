import React, { useState } from "react";
import "./slider.css";
import BtnSlider from "./btnSlider";
import { Link } from "react-router-dom";

const Slider = ({imagesData}) => {
  let length = imagesData.length;
  const [slideIndex, setSlideIndex] = useState(1);
  // console.log('63c28061096d82be8c88db' + (85 + slideIndex))
  // console.log(63c28061096d82be8c88db86+1)

  const nextSlide = () => {
    if (slideIndex !== imagesData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === imagesData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(imagesData.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {imagesData.map((obj, index) => {
        return (
          <Link to={`/shoe/${slideIndex}`}>
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                className="full-img"
                src={obj.image}
                // src={process.env.PUBLIC_URL + `/images/IMG${index + 1}.jpg`}
                alt=""
              />
            </div>
          </Link>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
