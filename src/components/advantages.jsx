import React from "react";
import {
  FaTruckPickup,
  FaMoneyBill,
  FaWallet,
  FaHeadset,
  FaUmbrella,
} from "react-icons/fa";

const Advantages = () => {
  return (
    <div className="pros">
      <div className="grid grid--1x5 space">
        <div className="shipping">
          <span>
            <FaTruckPickup style={{ width: "50px" }} />
          </span>
          <span>
            <div>Fast Shipping</div>
            <div>Across West Africa</div>
          </span>
        </div>
        <div className="saving">
          <span>
            <FaMoneyBill style={{ width: "50px" }} />
          </span>
          <span>
            <div>Money Saving</div>
            <div>Great Deals At Unbeatable Prices</div>
          </span>
        </div>
        <div className="payment">
          <span>
            <FaWallet style={{ width: "50px" }} />
          </span>
          <span>
            <div>Payment Method</div>
            <div>Secure System</div>
          </span>
        </div>
        <div className="online-support">
          <span>
            <FaHeadset style={{ width: "50px" }} />
          </span>
          <span>
            <div>Online Support</div>
            <div>24 Hours A Day</div>
          </span>
        </div>
        <div className="safe">
          <span>
            <FaUmbrella style={{ width: "50px" }} />
          </span>
          <span>
            <div>100% Safe</div>
            <div>Secure Shopping</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
