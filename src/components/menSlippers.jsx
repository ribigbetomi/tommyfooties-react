import React from "react";
import ShoeMen from "./shoeMen";

const MenSlippers = ({ data }) => {
  let pageSize = 4;
  const filteredSlippers = data.filter((item) => {
    return item.category.toLowerCase().includes("slippers");
  });

  return (
    <div>
      <ShoeMen filteredShoe={filteredSlippers} pageSize={pageSize} />
    </div>
  );
};

export default MenSlippers;
