import ShoeMen from "./shoeMen";

const MenLoafers = ({ data }) => {
  let pageSize = 4;
  const filteredLoafers = data.filter((item) => {
    return item.category.toLowerCase().includes("loafers");
  });
  return (
    <div>
      <ShoeMen filteredShoe={filteredLoafers} pageSize={pageSize} />
    </div>
  );
};

export default MenLoafers;
