import { useTypedSelector } from "../store";
import "../styles/claims-wrapper.scss";
import { Header } from "./Header";
import { Menu } from "./Menu";

interface ClaimWrapperType {
  children: JSX.Element[] | JSX.Element;
  isSearchInput?: boolean;
}

export const ClaimsWrapper = (prop: ClaimWrapperType) => {
  const { fullName } = useTypedSelector((state) => state.user);

  return (
    <div className="claims-main-wrapper">
      <Menu />
      <div className="claims-wrapper">
        <Header userName={fullName} />
        {prop.children}
      </div>
    </div>
  );
};
