import React, { useContext } from "react";
import { Link } from "react-router-dom";

const ShoeCard = ({ item }) => {
  return (
    <div className="shopby">
      <div className="grid-auto">
        <Link style={{ textDecoration: "none" }} to={`/shoe/${item.productNumber}`}>
          <div className="men-shoes-img">
            <img src={item.image} alt="" />
          </div>
        </Link>
        <div className="card-details">
          <Link style={{ textDecoration: "none" }} to={`/shoe/${item.productNumber}`}>
            <div className="card-info">
              <div>{item.name}</div>
              <div>&#8358; {item.price}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
