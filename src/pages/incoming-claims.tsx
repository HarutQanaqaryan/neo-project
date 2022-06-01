import selectIcon from "../assets/icons/arrow-bottom.svg";
import { Button } from "../components/button";
import { ClaimsTitle } from "../components/claims/claimsTitle";
import { ClaimsWrapper } from "../components/claimsWrapper";
import { IncomingClaimField } from "../components/incomingClaimField";

export const IncomingClaims = () => {
  return (
    <ClaimsWrapper>
      <div className="claims-block">
        <ClaimsTitle title="Incoming claim" />
        <IncomingClaimField
          text="Figma smart web system for to build"
          label="TITLE"
        />
        <IncomingClaimField text="Software" label="TYPE" icon={selectIcon} />
        <IncomingClaimField text="Some claim" label="DESCRIPTION" />
        <Button text="Close" className="create-new-claim cancel" />
        <Button text="Create" className="create-new-claim create" />
        <Button text="Decline" className="create-new-claim decline" />
      </div>
    </ClaimsWrapper>
  );
};
