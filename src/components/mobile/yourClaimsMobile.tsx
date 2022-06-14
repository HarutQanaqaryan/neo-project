import { Button } from "../button";
import { ClaimsTitle } from "../claims/claimsTitle";
import { ClaimCard } from "./claimCard";
import buttonIcon from "../../assets/icons/icon-plus.svg";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { useEffect } from "react";
import { getClaims } from "../../store/action-creators/claims";
import { Loading } from "../loading";
import { ErrorRequest } from "../error";
import { useNavigate } from "react-router-dom";

export const YourClaimsMobile = () => {
  const { data, loading, error } = useTypedSelector((state) => state.claims);
  const { isAdmin } = useTypedSelector((state) => state.user);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getClaims());
  }, [dispatch]);

  return (
    <div className="your-claims-mobile">
      <div className="your-claims-mobile-title">
        <ClaimsTitle title={isAdmin ? "All claims" : "Your Claims"} />
        {!isAdmin && (
          <Button
            className="claims-head_btn create-mobile"
            icon={buttonIcon}
            onClick={() => navigate("../home/create-claim")}
          />
        )}
      </div>
      {loading && <Loading />}
      {error && <ErrorRequest />}
      {data.map(({ _id, title, createdAt, type, status }) => (
        <ClaimCard
          title={title}
          created={createdAt.substring(0, 10)}
          type={type?.name}
          status={status?.name}
          id={_id}
          key={_id}
        />
      ))}
    </div>
  );
};
