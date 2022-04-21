import React, { useContext } from "react";
import MovieContext from "../contexts/MovieContext";
import "./styles/pagination.css";

export default function ({ moviesPerPage, setPageNo, pageNo : currentPageNumber }) {
  const { state } = useContext(MovieContext);

  const TotalNumberOfPages = Math.ceil(
    state.filterMovieList.length / moviesPerPage
  );

  const getPages = () => {
    let pages = [];
    for (let i = 0; i < TotalNumberOfPages; i++) {
      pages.push(i + 1);
    }
    return pages;
  };

  return (
    <div id="pages-container">
      <div id="pages">
        {getPages().map((pageNo) => (
          <span 
            className={`page-btn ${currentPageNumber === pageNo ? 'selected-page':''}`}
            onClick={() => setPageNo(pageNo)}
            
            >
            {pageNo}
          </span>
        ))}
      </div>
    </div>
  );
}
