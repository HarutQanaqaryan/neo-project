import userIcon from "../../assets/user.png";
import burgerIcon from "../../assets/icons/burger-icon.svg";
import "../../styles/mobile-header.scss"
import mobileNotificationIcon from "../../assets/icons/notification-icon.svg"

interface HeaderMobileType {
    onClick: () => void;
    isShow: boolean;
}
export const HeaderMobile = (prop: HeaderMobileType) => {
  return (
    <div className="header-mobile">
      <img src={burgerIcon} alt="Menu" className={`header-mobile-burger ${prop.isShow && "show"}`} onClick={prop.onClick}/>
      <div>
        <img
          src={mobileNotificationIcon}
          alt="Notification"
          className="header-mobile-notification"
        />
        <img src={userIcon} alt="User" className="header-user-icon" />
      </div>
    </div>
  );
};
