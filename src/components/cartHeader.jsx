import React from "react";

function CartHeader(props) {
  return (
    <div>
      <header className="block row center">
        <div>
          <a href="#/">
            <h1>Small Shopping Cart</h1>
          </a>
        </div>
        <div>
          <a href="#/cart">
            Cart
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ""
            )}
          </a>
          <a href="#/signin">SignIn</a>
        </div>
      </header>
    </div>
  );
}

export default CartHeader;
