import { ClaimsTable } from "./claimsTable";
import { Header } from "../header";
import { mockData } from "../../helpers/mockData";
import "../../styles/home.scss";
import "../../styles/your-claims.scss";

export const YourClaims = () => {
  return (
      <div className="your-claims">
        <Header name="Ivan Ivanov" />
        <ClaimsTable claims={mockData} />
      </div>
  );
};
