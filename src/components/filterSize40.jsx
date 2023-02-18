import React, { useMemo, useState } from "react";
import ShoeCard from "./shoeCard";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
const FilterSize40 = ({ filteredShoe, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filterSize40 = filteredShoe.filter((item) => {
    return item.shoeSize.includes("40");
  });

  const currentDataShown = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filterSize40.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const filtered = currentDataShown.map((item, index) => {
    return <ShoeCard item={item} />;
  });
  return (
    <div>
      {filtered}
      <div>
        <Pagination
          className="pagination-bar"
          totalCount={filterSize40.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FilterSize40;
