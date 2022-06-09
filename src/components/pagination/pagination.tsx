import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/pagination.scss";
import elipsis from "../../assets/icons/pagination-elipsis.svg";
import { paginationsNumberCells } from "../../helpers/paginetionNumbers";
import { getPaginateBlock } from "./getPaginateNums";

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
  const firstElem = pageNums[0];
  const lastElem = pageNums[pageNums.length - 1];

  useEffect(() => {
    sessionStorage.setItem("Pages", String(pageNums.length));

    setIsFirstElem(prop.currentPage === firstElem.num);

    setIsLastElem(prop.currentPage === lastElem.num);
  }, [pageNums.length, prop.currentPage, pageNums, firstElem, lastElem]);

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
      <>
        <NavLink
          to={`${url.pathname}`}
          className={`pagination-item ${firstElem.current && "current"}`}
          onClick={() => prop.paginate(firstElem.num)}
        >
          {firstElem.num}
        </NavLink>

        {prop.currentPage > 4 && (
          <img src={elipsis} alt="Ellipsis" className="pagination-ellipsis" />
        )}

        {getPaginateBlock(pageNums, beforePages, afterPages, prop, url)}

        {prop.currentPage < pageNums.length - 2 && (
          <img src={elipsis} alt="Ellipsis" className="pagination-ellipsis" />
        )}

        <NavLink
          to={`${url.pathname}`}
          className={`pagination-item ${lastElem.current && "current"}`}
          onClick={() => prop.paginate(lastElem.num)}
        >
          {lastElem.num}
        </NavLink>
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