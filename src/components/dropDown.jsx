import React from "react";
import NavMenu from "./navMenu";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <div className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      <div className="grid--1x2">
        {submenus.map((submenu, index) => {
          return (
            <Link to={submenu.to}>
              <NavMenu items={submenu} key={index} depthLevel={depthLevel} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
