import ShoeMen from "./shoeMen";

const MenLaceup = ({ data }) => {
  let pageSize = 4;
  const filteredLaceup = data.filter((item) => {
    return item.category.toLowerCase().includes("laceup");
  });

  return (
    <div>
      <ShoeMen filteredShoe={filteredLaceup} pageSize={pageSize} />
    </div>
  );
};

export default MenLaceup;
