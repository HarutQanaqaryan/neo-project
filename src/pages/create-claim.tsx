import { ClaimsWrapper } from "../components/claimsWrapper";
import { CreateNewClaim } from "../components/createNewClaim";
import "../styles/create-new-claim.scss";

export const CreateClaim = () => {
  return (
    <ClaimsWrapper>
      <CreateNewClaim />
    </ClaimsWrapper>
  );
};
