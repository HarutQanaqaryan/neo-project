import { MENU_ITEMS } from "../helpers/menuItems";
import companyLogo from "../assets/company-logo-lil.svg";
import "../styles/menu.scss";
import React from "react";
interface MenuTypes {
  mobile?: boolean
}
export const Menu = React.memo((prop: MenuTypes) => {
  return (
    <div className="menu">
      {!prop.mobile && <img src={companyLogo} alt="Company Logo" className="menu-company-logo"/>}
      {MENU_ITEMS.map(({ name, icon, current }) => {
        return (
          <span key={name} className={`menu-item ${current && "menu-item_current"}`}>
            <img src={icon} alt={name} />
            {prop.mobile && <span className="menu-item-title">{name}</span>}
          </span>
        );
      })}
    </div>
  );
});
