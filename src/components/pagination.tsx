import { SlowBuffer } from "buffer";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { paginationsNumberCells } from "../helpers/paginetionNumbers";
import "../styles/pagination.scss";
import { PaginationNavLink } from "./paginationLink";

interface PageType {
  claimPerPage: number;
  totalClaims: number;
  paginate: (number: number) => void;
  currentPage: number;
  nextPage: (number: number) => void;
  prevPage: (number: number) => void;
}

export const Pagination = (prop: PageType) => {
  const [pageNums, setPageNums] = useState(
    paginationsNumberCells(prop.totalClaims, prop.claimPerPage)
  );
  const [isFistElem, setIsFirstElem] = useState(true);
  const [isLastElem, setIsLastElem] = useState(false);
  const url = useLocation();

  useEffect(() => {
    sessionStorage.setItem("Current Page", String(prop.currentPage));
    sessionStorage.setItem("Pages", String(pageNums.length));
    setIsFirstElem(prop.currentPage === pageNums[0].num);
    setIsLastElem(prop.currentPage === pageNums[pageNums.length - 1].num);
  }, [pageNums.length, prop.currentPage, pageNums]);

  useEffect(() => {
    setPageNums(
      pageNums.map((el: any) =>
        el.num === prop.currentPage
          ? { ...el, current: true }
          : { ...el, current: false }
      )
    );
  }, [prop.currentPage, pageNums.length]);

  return (
    <div className="your-claims-pagination">
      <NavLink
        to={`${url.pathname}`}
        className={`pagination-item ${
          isFistElem && "pagination-prev-next_disabled"
        }`}
        onClick={() => prop.prevPage(prop.currentPage)}
      >
        {"<"}
      </NavLink>
      {pageNums.map((el: any) => (
        <PaginationNavLink
          url={url.pathname}
          current={el.current}
          num={el.num}
          paginate={prop.paginate}
          key={Math.random()}
        />
      ))}
      <NavLink
        to={`${url.pathname}`}
        className={`pagination-item ${
          isLastElem && "pagination-prev-next_disabled"
        }`}
        onClick={() => prop.nextPage(prop.currentPage)}
      >
        {">"}
      </NavLink>
    </div>
  );
};
