import React from "react";
// import { imagesData } from "./imagesData";
import { Link } from "react-router-dom";

const ShopNow = ({imagesData}) => {
  // const imagesData = JSON.parse(localStorage.getItem('imagesData'))

  console.log(imagesData)
  return (
  
   
    <div className="shopnow-container">
      <div className="grid--1x2">
        <div className="shopnow-oxford">
          <Link 
          to={`/shoe/${imagesData[1].productNumber}`}
          >
            <div className="shopnow-oxford-img">
              <img src={imagesData[1].image} alt="" />
              <div className="men-ox">Men's Mules</div>
              <button className="btn-shop">SHOP NOW</button>
            </div>
          </Link>
        </div>
        <div className="shopnow-oxford">
          <div className="two">
            <div className="shopnow-oxford-imgg">
              <Link 
              to={`/shoe/${imagesData[8].productNumber}`}
              >
                <img src={imagesData[8].image} alt="" />
                <div className="shopnow-boot">Men's Boot</div>
                <button className="btn-shopnow">SHOP NOW</button>
              </Link>
            </div>
            <div className="shopnow-oxford-input">
              <div className="newsletter">Sign Up For Newsletter</div>
              <div>Register your email for news and get special offers</div>
              <div className="input-group">
                <input type="text" placeholder="Your email address..." />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shopnow-oxford">
          <Link to="/shoe/8">
            <div className="shopnow-oxford-img">
              <img src={imagesData[7].image} alt="" />
              <div className="versatile">Most Versatile Pieces</div>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
    
  );
};

export default ShopNow;
