import buttonIcon from "../../assets/icons/icon-plus.svg";
import { Button } from "../button";
import "../../styles/button.scss";
import "../../styles/claims.scss";
import { ClaimsTitle } from "./claimsTitle";
import { isAdmin } from "../../helpers/contstants";
import { useNavigate } from "react-router-dom";

export const YourClaimsTitle = () => {
  const navigate = useNavigate();

  return (
    <div className="claims-head">
      <ClaimsTitle title={`${isAdmin ? "All Claims" : "Your Claims"}`} />
      <Button
        text="Create claim"
        className="claims-head_btn"
        icon={buttonIcon}
        onClick={() => navigate("../home/create-claim")}
      />
    </div>
  );
};
