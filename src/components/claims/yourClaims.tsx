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

  console.log(loading)
  
  return (
      <div className="your-claims">
        {data.length !== 0 && <ClaimsTable claims={data} loading={loading} error={error} />}
      </div>
  );
};
