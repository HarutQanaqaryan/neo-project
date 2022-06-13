import { TextField } from "./textField";
import searchIcon from "../assets/icons/search.svg";
import notificationIcon from "../assets/icons/notification.svg";
import "../styles/header.scss";
import userIcon from "../assets/user.png";
import logOutIcon from "../assets/icons/icon-log-out.svg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [fullName, setFullName] = useState("");
  const USER = localStorage.getItem("User");

  useEffect(() => {
    typeof USER === "string" && setFullName(JSON.parse(USER).fullName);
  }, [USER, fullName]);

  const url = useLocation();

  return (
    <div className="header">
      {/* {url.pathname === "/home" && (
        <TextField
          name="search"
          placeholder="Search"
          icon={searchIcon}
          uniqueStyle="header-search_input"
          value=""
          onChange={() => console.log("a")}
        />
      )} */}
      <div className="menu-user-info">
        <img
          src={notificationIcon}
          alt="Notification Icon"
          className="menu-notification-icon"
        />
        <img src={userIcon} alt="User Icon" className="header-user-icon" />
        <span className="menu-user-name">{fullName}</span>
        <img src={logOutIcon} alt="Log out icon" className="menu-log-out" />
      </div>
    </div>
  );
};
