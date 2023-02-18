import React from "react";
import  moment  from 'moment';
import {
  FaLocationArrow,
  FaPhone,
  FaMailBulk,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-head">
      <div className="footer-tommy">TOMMYFOOTIES</div>
      <div className="footer-allowance">
        {" "}
        <FaLocationArrow />
        <span className="footer-space">
          10, Ogunsola Street, Orogun, Ibadan
        </span>
      </div>
      <div className="footer-allowance">
        {" "}
        <FaPhone />{" "}
        <span className="footer-space">
          Call/Whatsapp:{" "}
          <a style={{ color: "red" }} href="tel: +2349050697380">
            <span className="footer-call">09050697380</span>
          </a>
          /{" "}
          <a style={{ color: "red" }} href="tel: +2347036505586">
            <span className="footer-call">07036505586</span>
          </a>
        </span>
      </div>
      <div className="footer-allowance">
        {" "}
        <a
          style={{ textDecoration: "none", color: "red" }}
          type="button"
          role="button"
          href="https://instagram.com/Tommyfooties"
        >
          <FaInstagram /> <span className="footer-space">Tommyfooties</span>
        </a>
      </div>
      <div className="footer-allowance">
        {" "}
        <FaMailBulk />{" "}
        <span className="footer-space">
          <a
            href="mailto: tommyfootiess@gmail.com"
            style={{ textDecoration: "none", color: "red" }}
          >
            Email: Tommyfootiess@gmail.com{" "}
          </a>
        </span>
      </div>

      <div className="footer">
        Tommyfooties © {moment(Date.now()).year()} Online Store. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
