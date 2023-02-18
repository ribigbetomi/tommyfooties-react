import React from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import PaystackPop from "@paystack/inline-js";
import PayButton from "./payButton";
import axios from "axios";
import { url } from "./../slices/api";
import { useState } from "react";

function CartBasket({
  cartItems,
  onAdd,
  onRemove,
  history
  // , user
}) {
  console.log(cartItems)
  // console.log(user._id);
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(userInfo)
  const user = JSON.parse(localStorage.getItem("userDetails"));
  // const navigate = useNavigate();

  // let cart = JSON.parse(localStorage.getItem("cartItems"));
  // useEffect(() => {
  // }, [cartItems]);
  // console.log(user._id);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.075;
  const shippingPrice = itemsPrice > 60000 ? 3000 : 3500;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const orderPrices = {
    itemsPrice, taxPrice, shippingPrice, totalPrice
  }
  localStorage.setItem('orderPrices', JSON.stringify(orderPrices))
     localStorage.setItem('orderItems', JSON.stringify(cartItems))

  // const payload = {
  //   orderItems: cartItems,
  //   // userId: user._id,
  //   // taxPrice,
  //   // shippingPrice,
  //   totalPrice: totalPrice,
  // };

  // const createOrderHandler = async () => {
  //   const config = {
  //     headers: {
  //       "x-auth-token": `${userInfo.token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };
    
  //   const { data } = await axios.post(
  //     `${url}/orders`,
  //     payload,
  //     config
  //   );
  //   console.log(data)
  //   history.push(`/shipping`)
  // };

  
  return (
    <div>
      {user ? (
        <h2 className="cart">Cart Items for {user.name}</h2>
      ) : (
        <h2 className="cart">Cart Items</h2>
      )}
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="cart">
            <div className="grid-1x2 grid-gap">
              <img src={item.image} width="150px" height="150px" alt="" />
              <div> {item.name} </div>
            </div>
            <div className="action">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x &#8358;{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="cart bg-white">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">&#8358;{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="cart bg-white">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">&#8358;{taxPrice.toFixed(2)}</div>
            </div>
            <div className="cart bg-white">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                &#8358;{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="cart bg-white">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>&#8358; {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            {user ? (
              // <div className="cart cart-btn">
              //   <PayButton
              //     cartItems={cartItems}
              //     user={user}
              //     amount={totalPrice}
              //   />
              // </div>
              <Link to='/shipping'>
              <button>
                GO TO CHECKOUT
                {/* <PaystackButton {...componentProps} /> */}
              </button>
              </Link>
            ) : (
              <Link to="/login">
                <button>Login to Check out</button>
              </Link>
            )}
            {/* <button
                onClick={() =>
                  alert("Thanks for visiting our website, Implement Checkout!")
                }
              >
                Checkout
              </button> */}
          </>
        )}
      </div>
    </div>
  );
}

export default CartBasket;
