import React from "react";
import ShopByBoots from "./shopByBoots";

const MenBoots = ({ data }) => {
  const filteredBoots = data.filter((item) => {
    return item.category.toLowerCase().includes("boots");
  });

  return (
    <div>
      <ShopByBoots data={data} />
    </div>
  );
};

export default MenBoots;
