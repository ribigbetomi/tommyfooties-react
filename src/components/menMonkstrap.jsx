import React from "react";
import ShoeMen from "./shoeMen";

const MenMonkstrap = ({ data }) => {
  let pageSize = 4;
  const filteredMonkstrap = data.filter((item) => {
    return item.category.toLowerCase().includes("monkstrap");
  });

  return (
    <div>
      <ShoeMen filteredShoe={filteredMonkstrap} pageSize={pageSize} />
    </div>
  );
};

export default MenMonkstrap;
