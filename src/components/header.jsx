import React from "react";
import HeaderInfo from "./headerInfo";
import HeaderSearch from "./headerSearch";

const Header = ({ countCartItems, user }) => {
  return (
    <div className="header">
      <div className="">
        <HeaderInfo />
      </div>
      <div className="">
        <HeaderSearch countCartItems={countCartItems} user={user} />
      </div>
    </div>
  );
};

export default Header;
