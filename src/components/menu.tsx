import { menuItems } from "../helpers/menuItems";
import companyLogo from "../assets/company-logo-lil.svg";
import "../styles/menu.scss";

export const Menu = () => {
  return (
    <div className="menu">
      <img src={companyLogo} alt="Company Logo" className="menu-company-logo"/>
      {menuItems.map(({ name, icon, current }) => {
        return (
          <span key={name} className={`menu-item ${current && "menu-item_current"}`}>
            <img src={icon} alt={name} />
          </span>
        );
      })}
    </div>
  );
};
