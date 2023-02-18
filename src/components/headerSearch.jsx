import React, { useState } from "react";
import auth from "../services/authService";
import {
  FaCartArrowDown,
  FaShoePrints,
  FaUser,
  FaSearch,
  FaFirstOrderAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { url } from "../slices/api";
import axios from "axios";
import { client } from "../slices/client";

const HeaderSearch = ({ countCartItems, user, history }) => {

  const [userInfo, setUserInfo] = useState('')

  

  // const [orders, setOrders] = useState('');

  const doSubmit = () => {
    auth.logout();
    window.location = "/";
  };

  // const getOrders = async () => {
  //   const {data} = await axios.get(`${url}/orders`)
  //           // setOrders(data)
  //           console.log(data)
  //           localStorage.setItem('orderLists', JSON.stringify(data))
  //           window.location = '/orders'
  // }

  return (
    <div className="header-search">
      <div className="grid-1x3 allowance header-gap">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="tommy">
            <div>
              <div>T O M M Y</div>
              <div>FOOTIES</div>
            </div>
            <div className="shoe-print">
              <FaShoePrints />
            </div>
          </div>
        </Link>
        <Link to="/search-sky" style={{ textDecoration: "none" }}>
          <div className="header-search-input">
            <FaSearch style={{ color: "black" }} />
            <button className="btn">SEARCH</button>
          </div>
        </Link>
          {user ? (
            <div style={{ cursor: "pointer" }} onClick={doSubmit}>
              <FaUser />
              Logout{" "}
            </div>
          ) : (
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }} className='account'
            >
              <span className="account-user-icon">
                <FaUser />{" "}
              </span>
              <span className="my-account">
                <div>My Account</div>
                <div>Log In / Register</div>
              </span>
            </Link>
          )}
        <div>
          {/* <span className="account-cart-icon"></span> */}
          <span className="my-cart">
            <Link to="/cart" style={{ textDecoration: "none" }} className='account'>           
                <FaCartArrowDown style={{ color: "black", marginRight: '10px' }} />
                <span className="cart-count">
                  <div>My Cart {countCartItems}</div>
                </span>
            </Link>
          </span>
        </div>
        {user && (
          // <div 
          // onClick={getOrders} className='pointer'
          // >
          <Link style={{textDecoration:'none', color:'black'}} to='/orders'>
          <FaFirstOrderAlt style={{ marginRight: '10px'}} />
          Go to Order List
          </Link>
        // </div>
          )}
      </div>
    </div>
  );
};

export default HeaderSearch;
