import buttonIcon from "../../assets/icons/icon-plus.svg";
import { Button } from "../button";
import "../../styles/button.scss";
import "../../styles/claims.scss";
import { ClaimsTitle } from "./claimsTitle";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../store";

export const YourClaimsTitle = () => {
  const { isAdmin } = useTypedSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="claims-head">
      <ClaimsTitle title={`${isAdmin ? "All Claims" : "Your Claims"}`} />
      {!isAdmin && <Button
        text="Create claim"
        className="claims-head_btn"
        icon={buttonIcon}
        onClick={() => navigate("../home/create-claim")}
      />}
    </div>
  );
};
