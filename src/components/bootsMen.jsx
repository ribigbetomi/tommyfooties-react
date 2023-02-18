import React, { useState, useMemo } from "react";
import ShoeCard from "./shoeCard";
import Pagination from "./pagination";

const BootsMen = ({ filteredShoe, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  let filter = filteredShoe.filter(
    (item) =>
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentDataShown = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filter.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, searchQuery]);

  const filtered = currentDataShown.map((item, index) => {
    return <ShoeCard item={item} />;
  });
  return (
    <div className="shoess">
      <div className="category-input">
        <input
          type="search"
          placeholder="Type here..."
          onChange={handleChange}
        />
      </div>
      <div className="shoess-grid">
        <div className="grid--1x2 grid-gap">{filtered}</div>
      </div>
      <div className="pagination">
        <Pagination
          className="pagination-bar"
          totalCount={filter.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BootsMen;
