import React, { useMemo, useState } from "react";
import _ from "lodash";
import { paginate } from "../utils/usePagination";
import LoafersMen from "./loafersMen";
import FilteredBlack from "./filteredBlack";
import FilteredBrown from "./filteredBrown";
import SearchShoeList from "./searchShoeList";
import FilterSize47 from "./filterSize47";
import FilterSize46 from "./filterSize46";
import FilterSize45 from "./filterSize45";
import FilterSize44 from "./filterSize44";
import FilterSize43 from "./filterSize43";
import FilterSize42 from "./filterSize42";
import FilterSize41 from "./filterSize41";
import FilterSize40 from "./filterSize40";
import FilterSize39 from "./filterSize39";
import FilterSize38 from "./filterSize38";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { category } from "./categories";

const ShopByLoafers = ({ data }) => {
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const [filter, setFilter] = useState("view-all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [pageSize, setPageSize] = useState(4);

  let filteredLoafers = data.filter((item) => {
    return item.category.toLowerCase().includes("loafers");
  });
  if (searchQuery) {
    filteredLoafers = data.filter((item) => {
      return (
        item.category.toLowerCase().includes("loafers") &&
        (item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }
  // else if (selectedCategory && selectedCategory.title) {
  //   filteredLoafers = data.filter((item) => {
  //     return (
  //       item.category.toLowerCase().includes("loafers") &&
  //       (item.color.includes(selectedCategory.title.toLowerCase()) ||
  //         item.size.includes(selectedCategory.title))
  //     );
  //   });
  // }

  const currentDataShown = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredLoafers.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid-auto">
      <div className="padding1-2">
        <div className="space-top1 bottom-line">SHOP BY</div>
        <div className="space-top1 bottom-line">
          <div>SEARCH</div>
          <input
            type="search"
            placeholder="Type search here..."
            onChange={handleChange}
            onClick={() => {
              setFilter("");
            }}
          />
        </div>
        <div
          className="space-top1 bottom-line"
          onClick={() => setFilter("view-all")}
        >
          View All
        </div>
        {category.map((c) => (
          <div
            key={c.id}
            className="space-top1 bottom-line"
            onClick={() => {
              handleSelectedCategory(c.id);
              setFilter(`${c.title}`);
            }}
          >
            {c.name}
          </div>
        ))}
      </div>

      <div className="margin1-2">
        <div>
          {filter === "" && (
            <SearchShoeList
              filteredLoafers={currentDataShown}
              searchQuery={searchQuery}
            />
          )}
        </div>

        <div>
          {filter === "view-all" && (
            <LoafersMen filteredLoafers={currentDataShown} />
          )}
        </div>

        <div>
          {filter === "black" && (
            <FilteredBlack filteredShoe={currentDataShown} />
          )}
        </div>
        <div>
          {filter === "brown" && (
            <FilteredBrown filteredShoe={currentDataShown} />
          )}
        </div>
        <div>
          {filter === "38" && <FilterSize38 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "39" && <FilterSize39 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "40" && <FilterSize40 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "41" && <FilterSize41 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "42" && <FilterSize42 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "43" && <FilterSize43 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "44" && <FilterSize44 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "45" && <FilterSize45 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "46" && <FilterSize46 filteredShoe={currentDataShown} />}
        </div>
        <div>
          {filter === "47" && <FilterSize47 filteredShoe={currentDataShown} />}
        </div>
        <div>
          <Pagination
            className="pagination-bar"
            totalCount={filteredLoafers.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopByLoafers;
