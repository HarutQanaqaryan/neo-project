import { ClaimsTable } from "./claimsTable";
import "../../styles/claims.scss";
import { useEffect} from "react";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { getClaims } from "../../store/action-creators/claims";

export const YourClaims = () => {
  const { data, loading, error } = useTypedSelector(state => state.claims)
  const dispatch = useTypedDispatch()

  useEffect(() => {
   dispatch(getClaims())
  }, [dispatch])

  return (
      <div className="your-claims">
        <ClaimsTable claims={data} loading={loading} error={error} />
      </div>
  );
};
