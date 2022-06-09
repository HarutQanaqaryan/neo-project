import { USER } from "../helpers/contstants";
import "../styles/claims-wrapper.scss";
import { Header } from "./header";
import { Menu } from "./menu";

interface ClaimWrapperType {
  children: JSX.Element[] | JSX.Element;
  isSearchInput?: boolean
}

export const ClaimsWrapper = (prop: ClaimWrapperType) => {
  let userName = ""

  if(typeof USER === "string"){
    userName = JSON.parse(USER).fullName
  }

  return (
    <div className="claims-main-wrapper">
      <Menu />
      <div className="claims-wrapper">
        <Header name={userName} />
        {prop.children}
      </div>
    </div>
  );
};
