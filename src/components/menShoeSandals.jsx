import ShoeMen from "./shoeMen.jsx";

const MenShoeSandals = ({ data }) => {
  let pageSize = 4;
  const filteredShoeSandals = data.filter((item) => {
    return item.category.toLowerCase().includes("shoesandals");
  });

  return (
    <div>
      <ShoeMen filteredShoe={filteredShoeSandals} pageSize={pageSize} />
    </div>
  );
};

export default MenShoeSandals;
