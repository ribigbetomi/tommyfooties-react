import React, { useState } from "react";
import FilteredBlack from "./filteredBlack";
import LaceupMen from "./shoeMen";
import FilteredBrown from "./filteredBrown";
import SearchShoeList from "./searchShoeList";
import FilterSize38 from "./filterSize38";
import FilterSize39 from "./filterSize39";
import FilterSize40 from "./filterSize40";
import FilterSize41 from "./filterSize41";
import FilterSize42 from "./filterSize42";
import FilterSize43 from "./filterSize43";
import FilterSize44 from "./filterSize44";
import FilterSize45 from "./filterSize45";
import FilterSize46 from "./filterSize46";
import FilterSize47 from "./filterSize47";
import { category } from "./categories";

const ShopByLaceup = ({ data }) => {
  let pageSize = 4;
  const [filter, setFilter] = useState("view-all");

  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLaceup = data.filter((item) => {
    return item.category.toLowerCase().includes("laceup");
  });

  // const filterSearch = filteredLaceup.filter((item) => {
  //   return (
  //     item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // });

  return (
    <div>
      {/* className="grid-auto"> */}
      {/* <div className="padding1-2">
        <div className="space-top1 bottom-line">SHOP BY</div>
        <div className="space-top1 bottom-line">
          <div>SEARCH</div>
          <input
            type="search"
            placeholder="Type search here..."
            onChange={handleChange}
            // onClick={() => setFilter("")}
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
              //   handleSelectedCategory(c.id);
              setFilter(`${c.title}`);
            }}
          >
            {c.name}
          </div>
        ))}
      </div> */}
      {/* {colorsLoafers.map((item, index) => {
          return <LoafersColors item={item} key={index} />;
        })} */}
      <div className="margin1-2">
        <div>
          {filter === "" && (
            <SearchShoeList filterSearchShoe={filteredLaceup} />
          )}
        </div>
        <div>
          {filter === "view-all" && (
            <LaceupMen filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "black" && (
            <FilteredBlack filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "brown" && (
            <FilteredBrown filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "38" && (
            <FilterSize38 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "39" && (
            <FilterSize39 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "40" && (
            <FilterSize40 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "41" && (
            <FilterSize41 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "42" && (
            <FilterSize42 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "43" && (
            <FilterSize43 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "44" && (
            <FilterSize44 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "45" && (
            <FilterSize45 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "46" && (
            <FilterSize46 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
        <div>
          {filter === "47" && (
            <FilterSize47 filteredShoe={filteredLaceup} pageSize={pageSize} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopByLaceup;
