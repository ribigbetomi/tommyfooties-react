import React from "react";
import { NavItems } from "../navItems";
import NavMenu from "./navMenu";

const NavBar = () => {
  const depthLevel = 0;
  return (
    <nav>
      <ul className="menus">
        {NavItems.map((item, index) => {
          const depthLevel = 0;

          return <NavMenu items={item} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
