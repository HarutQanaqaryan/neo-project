import selectIcon from "../assets/icons/arrow-bottom.svg";
import { Button } from "../components/button";
import { ClaimsTitle } from "../components/claims/claimsTitle";
import { IncomingClaimField } from "../components/incomingClaimField";
import "../styles/button.scss";

export const IncomingClaims = () => {
  return (
    <div className="claims-block">
      <ClaimsTitle title="Incoming claim" />
      <IncomingClaimField
        text="Figma smart web system for to build"
        label="TITLE"
      />
      <IncomingClaimField text="Software" label="TYPE" icon={selectIcon} />
      <IncomingClaimField text="Some claim" label="DESCRIPTION" />
      <Button
        text="Close"
        className="create-new-claim cancel"
        onClick={() => console.log("a")}
      />
      <Button
        text="Create"
        className="create-new-claim create"
        onClick={() => console.log("a")}
      />
      <Button text="Decline" className="create-new-claim decline" onClick={() => console.log("a")}/>
    </div>
  );
};
