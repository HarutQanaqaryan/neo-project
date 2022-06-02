import userIcon from "../../assets/user.png";
import notificationIcon from "../../assets/icons/notification.svg";
import burgerIcon from "../../assets/icons/burger-icon.svg";
import "../../styles/mobile-header.scss"

interface HeaderMobileType {
    onClick: () => void;
}
export const HeaderMobile = (prop: HeaderMobileType) => {
  return (
    <div className="header-mobile">
      <img src={burgerIcon} alt="Menu" className="header-mobile-burger" onClick={prop.onClick}/>
      <div>
        <img
          src={notificationIcon}
          alt="Notification"
          className="header-mobile-notification"
        />
        <img src={userIcon} alt="User" className="header-user-icon" />
      </div>
    </div>
  );
};
