import { useState } from "react";
import { Menu } from "../menu";
import { HeaderMobile } from "./headerMobile";

interface MobileWrapperType {
  children: JSX.Element[] | JSX.Element;
}

export const MobileWrapper = (prop: MobileWrapperType) => {
  const [isMenu, setIsMenu] = useState(false);

  const showHideMenu = () => {
    isMenu ? setIsMenu(false) : setIsMenu(true);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <div className={`${isMenu && "mobile-wrapper"}`}>
      <HeaderMobile onClick={showHideMenu} isShow={isMenu}/>
      {isMenu && <Menu mobile={true} />}
      {isMenu && (
        <div
          className="mobile-wrapper-opacity-background"
          onClick={closeMenu}
        ></div>
      )}
      {prop.children}
    </div>
  );
};
