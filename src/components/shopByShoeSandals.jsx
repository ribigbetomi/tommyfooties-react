import React, { useState } from "react";
import ShoeSandalsMen from "./shoeSandalsMen";
import FilteredBlack from "./filteredBlack";
import FilteredBrown from "./filteredBrown";
import SearchShoeList from "./searchShoeList";
import FilterSize47 from "./filterSize47";
import FilterSize46 from "./filterSize46";
import FilterSize45 from "./filterSize45";
import FilterSize43 from "./filterSize43";
import FilterSize44 from "./filterSize44";
import FilterSize42 from "./filterSize42";
import FilterSize41 from "./filterSize41";
import FilterSize40 from "./filterSize40";
import FilterSize39 from "./filterSize39";
import FilterSize38 from "./filterSize38";
import { category } from "./categories";

const ShopByShoeSandals = ({ data }) => {
  let pageSize = 4;

  const [filter, setFilter] = useState("view-all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredShoeSandals = data.filter((item) => {
    return item.category.toLowerCase().includes("shoesandals");
  });

  // const filterSearch = filteredShoeSandals.filter((item) => {
  //   return (
  //     item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.title.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // });

  return (
    <div>
      {/* className="grid-auto"> */}
      {/* <div className="padding1-2">
        <div className="space-top bottom-line">SHOP BY</div>

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

      <div className="margin1-2">
        <div>
          {filter === "" && (
            <SearchShoeList filterSearchShoe={filteredShoeSandals} />
          )}
        </div>
        <div>
          {filter === "view-all" && (
            <ShoeSandalsMen
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "black" && (
            <FilteredBlack
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "brown" && (
            <FilteredBrown
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "38" && (
            <FilterSize38
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "39" && (
            <FilterSize39
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "40" && (
            <FilterSize40
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "41" && (
            <FilterSize41
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "42" && (
            <FilterSize42
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "43" && (
            <FilterSize43
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "44" && (
            <FilterSize44
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "45" && (
            <FilterSize45
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "46" && (
            <FilterSize46
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
        <div>
          {filter === "47" && (
            <FilterSize47
              filteredShoe={filteredShoeSandals}
              pageSize={pageSize}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopByShoeSandals;
