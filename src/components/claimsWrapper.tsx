import { USER_NAME } from "../helpers/contstants";
import "../styles/claims-wrapper.scss";
import { Header } from "./header";
import { Menu } from "./menu";

interface ClaimWrapperType {
  children: JSX.Element[] | JSX.Element;
  isSearchInput?: boolean
}

export const ClaimsWrapper = (prop: ClaimWrapperType) => {


  return (
    <div className="claims-main-wrapper">
      <Menu />
      <div className="claims-wrapper">
        <Header name={USER_NAME} />
        {prop.children}
      </div>
    </div>
  );
};
