import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const HeaderInfo = () => {
  return (
    <div className="info-header">
      <div className="header-info grid-1x3">
        <div className="header-mail">
          <a
            href="mailto: tommyfootiess@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <FaEnvelope /> Email: tommyfootiess@gmail.com
          </a>
        </div>
        <div className="header-hotline">
          <a href="tel: +2349050697380" style={{ textDecoration: "none" }}>
            <FaPhone /> Hotline: (+234) 905 069 7380
          </a>
        </div>
        <div className="header-chat">
          <a
            href="https://wa.me/2349050697380"
            style={{ textDecoration: "none" }}
          >
            <FaWhatsapp /> Chat with us on Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
