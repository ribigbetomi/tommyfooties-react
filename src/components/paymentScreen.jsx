import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../slices/api";


const PaymentScreen = ({ history, cartItems }) => {
  window.scrollTo(0, 0);


  
  const shippingAddress = JSON.parse(localStorage.getItem('shippingAddress'))
  const {totalPrice} = JSON.parse(localStorage.getItem('orderPrices'))
  
  const [paymentMethod, setPaymentMethod] = useState("Card");
  
  if (!shippingAddress) {
    history.push("/shipping");
  }
  
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const payload = {
  //   orderItems: cartItems,
  //   // userId: user._id,
  //   // taxPrice,
  //   // shippingPrice,
  //   shippingAddress,
  //   totalPrice: totalPrice,
  // };

  // const createOrderHandler = async (e) => {
  //   e.preventDefault()
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
  //   localStorage.setItem('orderItems', JSON.stringify(data))
  //   localStorage.setItem(JSON.stringify(paymentMethod))
  //   console.log(data)
  //   history.push(`/checkout`)
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   history.push("http://localhost:3000/checkout");
  // };
  return (
    <>

      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">ATM Card</label>
            </div>
          </div>

          <button type="submit">
            <Link to='/checkout' className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
