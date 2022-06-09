import "../styles/claims-wrapper.scss";
import { Header } from "./header";
import { Menu } from "./menu";

interface ClaimWrapperType {
  children: JSX.Element[] | JSX.Element;
  isSearchInput?: boolean
}
export const ClaimsWrapper = (prop: ClaimWrapperType) => {
  const user = localStorage.getItem("User")
  let userName = ""

  if(typeof user === "string"){
    userName = JSON.parse(user).fullName
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
