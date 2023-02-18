// import React, { useState } from "react";
// // import { useMemo } from "react";
// // import { Link } from "react-router-dom";
// import ShoeCard from "./shoeCard";
// // import Pagination from "./pagination";
// // import "./pagination.scss";

// const SearchShoeListt = ({ filteredLoafers, searchQuery }) => {
//   //   const [currentPage, setCurrentPage] = useState(1);

//   //   const handlePageChange = (page) => {
//   //     setCurrentPage(page);
//   //   };

//   const filtered = filteredLoafers.filter((item) => {
//     return (
//       item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   //   const currentDataShown = useMemo(() => {
//   //     let currentPagee = currentPage;
//   //     let pageSizee = pageSize;
//   //     let filteredLoaferss = filteredLoafers;
//   //     const firstPageIndex = (currentPagee - 1) * pageSizee;
//   //     const lastPageIndex = firstPageIndex + pageSizee;
//   //     return filteredLoaferss.slice(firstPageIndex, lastPageIndex);
//   //   }, [currentPage]);

//   //   const shoeList = filtered.map((item, index) => {
//   //     return (
//   //       //   <Link to={`/shoe/${item.id}`}>
//   //       <ShoeCard key={index} item={item} />
//   //       //   </Link>
//   //     );
//   //   });
//   return (
//     <div>
//       {filtered.map((item, index) => {
//         return (
//           //   <Link to={`/shoe/${item.id}`}>
//           <ShoeCard key={index} item={item} />
//         );
//       })}

//       {/* <div>{shoeList}</div> */}
//       {/* <div>
//         <Pagination
//           className="pagination-bar"
//           totalCount={filteredLoafers.length}
//           pageSize={pageSize}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div> */}

//
//     </div>
//   );
// };

// export default SearchShoeListt;
import React, { useState } from "react";

import { Link } from "react-router-dom";
import ShoeCard from "./shoeCard";

const SearchShoeListt = ({ filteredShoe }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filtered = filteredShoe.filter((item) => {
    return (
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const shoeList = filtered.map((item, index) => {
    return (
      // <Link to={`/shoe/${item.id}`}>
      // </Link>
      <span>
        <ShoeCard key={index} item={item} />
      </span>
    );
  });
  return (
    <div>
      <div className="search-shoe">
        <input
          type="search"
          placeholder="Type here..."
          onChange={handleChange}
        />{" "}
      </div>
      <span className="footer-space space-1">{shoeList}</span>
    </div>
  );
};

export default SearchShoeListt;
