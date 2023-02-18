import React from "react";


const ShoeProduct = ({ product, onAdd, cartItems }) => {

  return (
    <div className="grid-product">
      <div className="shoe-product-img">
        <img src={product.image} alt="" />{" "}
      </div>
      <div className="shoe-product-details">
        <div>{product.title}</div>
        <div>&#8358;{product.price}</div>
        <div>{product.category}</div>
        <div> Sold By: TOMMYFOOTIES</div>
        <div>Availability: Made on order within 5 working days</div>
        <div>
          <div>OVERVIEW</div>
          <div>{product.details}</div>
        </div>
        <div>
          <div>AVAILABLE OPTIONS</div>
        </div>
        <button onClick={() => onAdd(product)}> Add to Cart</button>

      </div>
    </div>
  );
};

export default ShoeProduct;
