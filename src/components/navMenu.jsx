import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropDown";

const NavMenu = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            cs
          >
            {items.title}{" "}
            <span
              className={dropdown ? "right" : "down"}
              style={{ color: "white" }}
            >
              <span>&raquo;</span>
            </span>
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link to={items.to}>{items.title}</Link>
      )}
    </li>
  );
};

export default NavMenu;
