import React from "react";
import { Link, Route } from "react-router-dom";
// import { imagesData } from "./imagesData";
import ShoeProduct from "./shoeProduct";
import { render } from "@testing-library/react";

const ShoeShowcase = (props) => {
  const { productNumber } = props.match.params;
  const imagesData = JSON.parse(localStorage.getItem('imagesData'))
  // const ID = parseInt(id);
  console.log(imagesData)

  const filtered = imagesData.filter((item) => {
    return item.productNumber === productNumber;
  });
  console.log(filtered)

  return (
    <div>
    {imagesData.length === 0 ? 'Loading' : (
    <div className="showcasee grid-auto">
      <div className="shoe-showcase">
        <div className="shoe-showcase-category">CATEGORIES</div>
        <Link style={{ textDecoration: "none" }} to="/men-loafers">
          <div className="shoe-showcase-loafers space-top1 bottom-line">
            Men's Loafers
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/men-monkstrap">
          <div className="shoe-showcase-monkstrap space-top1 bottom-line">
            Men's Monkstrap
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/men-laceup">
          <div className="shoe-showcase-laceup space-top1 bottom-line">
            Men's Lace-Up
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/men-boots">
          <div className="shoe-showcase-boots space-top1 bottom-line">
            Men's Boots
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/men-mules">
          <div className="shoe-showcase-mules space-top1 bottom-line">
            Men's Mules
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/men-shoesandals">
          <div className="shoe-showcase-shoesandals space-top1 bottom-line">
            Men's Shoe Sandals
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/men-slippers">
          <div className="shoe-showcase-slippers space-top1 bottom-line">
            Men's Slippers
          </div>
        </Link>
      </div>
      <div>
        {filtered.map((item) => {
          return (
            <ShoeProduct
              product={item}
              key={item._id}
              onAdd={props.onAdd}
              cartItems={props.cartItems}
            />
          );
        })}
      </div>
    </div>
    )}
    </div>
  );
};

export default ShoeShowcase;
