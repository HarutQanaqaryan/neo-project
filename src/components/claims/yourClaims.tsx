import { ClaimsTable } from "./claimsTable";
import { mockData } from "../../helpers/mockData";
import "../../styles/claims.scss";

export const YourClaims = () => {
  return (
      <div className="your-claims">
        <ClaimsTable claims={mockData} />
      </div>
  );
};
