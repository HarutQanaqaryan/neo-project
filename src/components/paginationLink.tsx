import { NavLink } from "react-router-dom";
interface PaginationNavLinkTypes {
  url: string;
  current: boolean;
  num: number
  paginate: (number: number) => void;
}
export const PaginationNavLink = (prop: PaginationNavLinkTypes) => {
  return (
    <NavLink
      to={`${prop.url}`}
      className={`pagination-item ${prop.current && "current"}`}
      onClick={() => prop.paginate(prop.num)}
    >
      {prop.num}
    </NavLink>
  );
};
