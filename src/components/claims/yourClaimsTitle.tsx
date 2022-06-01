import buttonIcon from "../../assets/icons/icon-plus.svg";
import { Button } from "../button";
import "../../styles/button.scss";
import "../../styles/claims.scss";

export const YourClaimsTitle = () => {
  return (
    <div className="claims-head">
      <h4 className="claims-head_title">Your claims</h4>
      <Button
        text="Create claim"
        className="claims-head_btn"
        icon={buttonIcon}
      />
    </div>
  );
};
