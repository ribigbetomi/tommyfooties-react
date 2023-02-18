import React, { useState, useMemo } from "react";
import ShoeCard from "./shoeCard";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

const FilterSize43 = ({ filteredShoe, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filterSize43 = filteredShoe.filter((item, index) => {
    return item.shoeSize.includes("43");
  });

  const currentDataShown = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filterSize43.slice(firstPageIndex, lastPageIndex);
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
          totalCount={filterSize43.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FilterSize43;
