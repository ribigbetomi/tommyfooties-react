import { Link } from "react-router-dom";
import React from "react";

const QuickRoute = () => {
  return (
    <div>
      Go straight to:{" "}
      <Link style={{ "text-decoration": "none" }} to="/men-boots">
        <span className="quick">Men's Boots</span>
      </Link>
      ,
      <Link style={{ "text-decoration": "none" }} to="/men-loafers">
        {" "}
        <span className="quick">Men's loafers</span>
      </Link>
      ,
      <Link style={{ "text-decoration": "none" }} to="/men-slippers">
        {" "}
        <span className="quick">Men's Slippers</span>
      </Link>
    </div>
  );
};

export default QuickRoute;
