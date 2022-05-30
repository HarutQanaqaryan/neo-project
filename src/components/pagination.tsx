import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { paginationsNumberCells } from "../helpers/paginetionNumbers";
import "../styles/pagination.scss";
import { PaginationNavLink } from "./paginationLink";
import elipsis from "../assets/icons/pagination-elipsis.svg";

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
  let beforePages = prop.currentPage - 2;
  let afterPages = prop.currentPage + 2;

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

  const renderPaginate = (num: number, current: boolean) => {
    return (
      <PaginationNavLink
        url={url.pathname}
        current={current}
        num={num}
        paginate={prop.paginate}
        key={Math.random()}
      />
    );
  };
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
      <>
        {renderPaginate(pageNums[0].num, pageNums[0].current)}
        {prop.currentPage > 3 && (
          <img src={elipsis} alt="Ellipsis" className="pagination-ellipsis" />
        )}
        {pageNums.map((el) => {
          if (el.num === 1) {
            return false;
          }
          if (el.num === pageNums.length) {
            return false;
          }
          if (el.num >= beforePages && el.num <= prop.currentPage)
            return renderPaginate(el.num, el.current);
          if (el.num <= afterPages && el.num >= prop.currentPage)
            return renderPaginate(el.num, el.current);
          return true;
        })}
        {prop.currentPage < pageNums.length - 2 && (
          <img src={elipsis} alt="Ellipsis" className="pagination-ellipsis" />
        )}
        {renderPaginate(
          pageNums[pageNums.length - 1].num,
          pageNums[pageNums.length - 1].current
        )}
      </>
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
