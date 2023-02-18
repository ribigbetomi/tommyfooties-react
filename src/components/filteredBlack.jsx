import React, { useMemo, useState } from "react";
import ShoeCard from "./shoeCard";
import { Link } from "react-router-dom";
import Pagination from "./pagination";

const FilteredBlack = ({ filteredShoe, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filterBlackShoe = filteredShoe.filter((item) => {
    return item.color.includes("black");
  });

  const currentDataShown = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filterBlackShoe.slice(firstPageIndex, lastPageIndex);
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
          totalCount={filterBlackShoe.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FilteredBlack;
