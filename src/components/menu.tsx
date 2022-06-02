import { menuItems } from "../helpers/menuItems";
import companyLogo from "../assets/company-logo-lil.svg";
import "../styles/menu.scss";
interface MenuTypes {
  mobile?: boolean
}
export const Menu = (prop: MenuTypes) => {
  return (
    <div className="menu">
      {!prop.mobile && <img src={companyLogo} alt="Company Logo" className="menu-company-logo"/>}
      {menuItems.map(({ name, icon, current }) => {
        return (
          <span key={name} className={`menu-item ${current && "menu-item_current"}`}>
            <img src={icon} alt={name} />
            {prop.mobile && <span className="menu-item-title">{name}</span>}
          </span>
        );
      })}
    </div>
  );
};
