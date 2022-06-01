import { YourClaims } from "../components/claims/yourClaims";
import { ClaimsWrapper } from "../components/claimsWrapper";

export const Home = () => {
  return (
    <ClaimsWrapper isSearchInput={true}>
      <YourClaims />
    </ClaimsWrapper>
  );
};
