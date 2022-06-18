import notificationIcon from "../assets/icons/notification.svg";
import "../styles/header.scss";
import userIcon from "../assets/user.png";
import logOutIcon from "../assets/icons/icon-log-out.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useTypedDispatch } from "../store";
import { SearchTextField } from "./searchTexField";
import { SEARCH_VALUE } from "../store/reducers/filterValues";
import { LOG_OUT } from "../store/types/actionTypes";
import React from "react";

interface HeaderProps {
  userName: string
}
export const Header = (prop: HeaderProps) => {
  const dispatch = useTypedDispatch();

  const url = useLocation();
  const navigate = useNavigate();

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_VALUE, searchValue: e.target.value })
  };

  const logOut = () => {
    dispatch({ type: LOG_OUT });
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    navigate("../");
  };
  return (
    <div className="header">
      {url.pathname === "/home" && (
        <SearchTextField
          placeholder="Search"
          type="search"
          uniqueStyle="search"
          onChange={handleSearchValue}
        />
      )}
      <div className="menu-user-info">
        <img
          src={notificationIcon}
          alt="Notification Icon"
          className="menu-notification-icon"
        />
        <img src={userIcon} alt="User Icon" className="header-user-icon" />
        <span className="menu-user-name">{prop.userName}</span>
        <img
          src={logOutIcon}
          alt="Log out icon"
          className="menu-log-out"
          onClick={() => logOut()}
        />
      </div>
    </div>
  );
};
