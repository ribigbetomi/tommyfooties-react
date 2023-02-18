import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  axios  from 'axios';
import { url } from "../slices/api";
import { toast } from "react-toastify";

const ShippingScreen = ({ history, cartItems }) => {
  window.scrollTo(0, 0);
  
  // const shippingAddress = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {
  //   address: '', city: '', postalCode: '', country: '', phoneNumber: ''
  // }
  
  // useEffect(() => {
  //   const [shippingAddress, setShippingAddress] = useState(shipping)
  //   setShippingAddress(shipping)
  // }, [])
  // console.log(shippingAddress)
  
  const shippingAddress = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
  
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber)


  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const {totalPrice} = JSON.parse(localStorage.getItem('orderPrices'))

  const payload = {
    orderItems: cartItems,
    // userId: user._id,
    // taxPrice,
    // shippingPrice,
    shippingAddress: {address, city, postalCode, country, phoneNumber},
    totalPrice: totalPrice,
  };

  const createOrderHandler = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "x-auth-token": `${userInfo.token}`,
        "Content-Type": "application/json",
      },
    };
    
    const {data} = await axios.post(
      `${url}/orders`,
      payload,
      config
    );
    localStorage.setItem('orderItems', JSON.stringify(data))
    localStorage.setItem('shippingAddress', JSON.stringify({address, city, phoneNumber, country}))

    console.log(data)
    history.push(`/checkout`)
    // toast("Shipping Details Added", {
    //   autoClose: 1000
    // })
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('shippingAddress', JSON.stringify({address, city, postalCode, country, phoneNumber}))
  //   history.push("/payment");
  // };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter phone number"
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          /> */}
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit" onClick={(e) => createOrderHandler(e)}>
            {/* <Link to="/payment" className="text-white"> */}
              Continue
            {/* </Link> */}
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
