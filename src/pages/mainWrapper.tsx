import { useLocation } from "react-router-dom";
import { YourClaims } from "../components/claims/YourClaims";
import { ClaimsWrapper } from "../components/ClaimsWrapper";
import { CreateEditClaim } from "../components/CreateEditNewClaim";
import { MobileWrapper } from "../components/mobile/MobileWrapper";
import { YourClaimsMobile } from "../components/mobile/YourClaimsMobile";
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
