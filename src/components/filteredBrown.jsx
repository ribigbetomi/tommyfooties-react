import React, { useMemo } from "react";
import { useState } from "react";
import ShoeCard from "./shoeCard";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

const FilteredBrown = ({ filteredShoe, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const filterBrown = filteredShoe.filter((item) => {
    return item.color.includes("brown");
  });

  const currentDataShown = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filterBrown.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const filtered = currentDataShown.map((item, index) => {
    return <ShoeCard item={item} />;
  });
  return (
    <div>
      <div>{filtered}</div>
      <div>
        <Pagination
          className="pagination-bar"
          totalCount={filterBrown.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FilteredBrown;
