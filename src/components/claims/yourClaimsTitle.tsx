import buttonIcon from "../../assets/icons/icon-plus.svg";
import { Button } from "../button";
import "../../styles/button.scss";
import "../../styles/your-claims.scss";

export const YourClaimsTitle = () => {
  return (
    <div className="your-claims-head">
      <h4 className="your-claims-head_title">Your claims</h4>
      <Button
        text="Create claim"
        className="your-claims-head_btn"
        icon={buttonIcon}
      />
    </div>
  );
};
