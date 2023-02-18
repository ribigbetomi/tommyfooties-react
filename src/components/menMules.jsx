import ShoeMen from "./shoeMen";

const MenMules = ({ data }) => {
  let pageSize = 4;
  const filteredMules = data.filter((item) => {
    return item.category.toLowerCase().includes("mules");
  });

  return (
    <div>
      <ShoeMen filteredShoe={filteredMules} pageSize={pageSize} />
    </div>
  );
};

export default MenMules;
