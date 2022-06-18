import { useLocation } from "react-router-dom";
import { YourClaims } from "../components/claims/yourClaims";
import { ClaimsWrapper } from "../components/claimsWrapper";
import { CreateEditClaim } from "../components/createEditNewClaim";
import { MobileWrapper } from "../components/mobile/mobileWrapperMobile";
import { YourClaimsMobile } from "../components/mobile/yourClaimsMobile";
import { checkScreen } from "../helpers/checkMobile";

export const MainWrapper = () => {
  const url = useLocation();
  
  const renderComponent = () => {
    switch (url.pathname) {
      case "/home": {
        return checkScreen() ? <YourClaims /> : <YourClaimsMobile />;
      }
      case "/home/create-claim": {
        return <CreateEditClaim />;
      }
      case "/home/incoming-claim": {
        return <CreateEditClaim />;
      }
      default:
        return <YourClaims />;
    }
  };

  return (
    <>
      {checkScreen() ? (
        <ClaimsWrapper>
          <>{renderComponent()}</>
        </ClaimsWrapper>
      ) : (
        <MobileWrapper>
          <>{renderComponent()}</>
        </MobileWrapper>
      )}
    </>
  );
};
