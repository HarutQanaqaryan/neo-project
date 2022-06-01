import { useLocation } from "react-router-dom";
import { YourClaims } from "../components/claims/yourClaims";
import { ClaimsWrapper } from "../components/claimsWrapper";
import { CreateNewClaim } from "../components/createNewClaim";
import { IncomingClaims } from "./incoming-claims";

export const MainWrapper = () => {
  const url = useLocation();
  console.log(url.pathname);

  const renderComponent = () => {
    switch (url.pathname) {
      case "/home": {
        return <YourClaims />;
      }
      case "/home/create-claim": {
        return <CreateNewClaim />;
      }
      case "/home/incoming-claim": {
        return <IncomingClaims />;
      }
      default:
        return <YourClaims />
    }
  };
  return (
    <ClaimsWrapper>
      <>{renderComponent()}</>
    </ClaimsWrapper>
  );
};
