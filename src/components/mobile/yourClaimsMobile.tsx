import { Button } from "../button";
import { ClaimsTitle } from "../claims/claimsTitle";
import { ClaimCard } from "./claimCard";
import buttonIcon from "../../assets/icons/icon-plus.svg";

interface YourClaimsMobileType {
  claims: Array<any>;
}
export const YourClaimsMobile = (prop: YourClaimsMobileType) => {
  return (
    <div className="your-claims-mobile">
      <div className="your-claims-mobile-title">
        <ClaimsTitle title="Your Claims" />
        <Button className="claims-head_btn create" icon={buttonIcon} />
      </div>
        {prop.claims.map(({ id, title, created, type, status }) => (
          <ClaimCard
            title={title}
            created={created}
            type={type}
            status={status}
            key={Math.random()}
          />
        ))}
    </div>
  );
};
