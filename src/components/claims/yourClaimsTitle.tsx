import buttonIcon from "../../assets/icons/icon-plus.svg";
import { Button } from "../button";
import "../../styles/button.scss";
import "../../styles/claims.scss";
import { ClaimsTitle } from "./claimsTitle";

export const YourClaimsTitle = () => {
  return (
    <div className="claims-head">
      <ClaimsTitle title="Your Claims" />
      <Button
        text="Create claim"
        className="claims-head_btn"
        icon={buttonIcon}
        onClick={() => console.log("a")}
      />
    </div>
  );
};
