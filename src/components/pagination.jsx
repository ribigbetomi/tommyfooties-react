import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../utils/usePagination";
import "./pagination.scss";
import PropTypes from "prop-types";
// import _ from "lodash";

const Pagination = (props) => {
  const {
    totalCount,
    pageSize,
    currentPage,
    onPageChange,
    siblingCount = 1,
    className,
  } = props;
  
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range, we shall not render the pagination component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      {/* left navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230</li>;
        }

        // Render our Page Pills
        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/* Right Navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );

  // return (

  // <nav>
  //   <ul className="pagination">
  //     {pages.map((page) => (
  //       <li
  //         key={page}
  //         className={page === currentPage ? "page-item active" : "page-item"}
  //       >
  //         <a onClick={() => onPageChange(page)} className="page-link">
  //           {page}
  //         </a>
  //       </li>
  //     ))}
  //   </ul>
  // </nav>
  // );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
