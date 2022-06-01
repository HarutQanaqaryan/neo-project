import { NavLink } from "react-router-dom";

export const renderPaginate = (num: number, current: boolean, url: any, prop: any) => {
    return (
      <NavLink
      to={`${url.pathname}`}
      className={`pagination-item ${current && "current"}`}
      onClick={() => prop.paginate(num)}
      key={Math.random()}
    >
      {num}
    </NavLink>
    );
  };

export const getPaginateBlock = (pageNums: Array<any>, beforePages: number, afterPages: number, prop: any, url: any) => {
    return pageNums.map((el) => {
       if (el.num === 1) {
         return false;
       }
       if (el.num === pageNums.length) {
         return false;
       }
       if (el.num >= beforePages && el.num <= prop.currentPage)
         return renderPaginate(el.num, el.current, url, prop);
       if (el.num <= afterPages && el.num >= prop.currentPage)
         return renderPaginate(el.num, el.current, url, prop);
       return true;
     })
   }