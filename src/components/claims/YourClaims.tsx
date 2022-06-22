import { ClaimsTable } from "./ClaimsTable";
import "../../styles/claims.scss";
import { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { getClaims } from "../../store/action-creators/claims";
import { sortSearchClaims } from "../../store/action-creators/sortSearchClaims";

export const YourClaims = () => {
  const { data, loading, error } = useTypedSelector((state) => state.claims);
  const { searchValue, sortValue} = useTypedSelector(
    (state) => state.filterValues
  );
  const dispatch = useTypedDispatch();

 useEffect(() => {
  dispatch(sortSearchClaims(sortValue.toLowerCase(), searchValue.toLowerCase()))
 }, [searchValue, sortValue, dispatch])


  useEffect(() => {
    dispatch(getClaims());
  }, [dispatch]);

  return (
    <div className="your-claims">
      <ClaimsTable claims={data} loading={loading} error={error} />
    </div>
  );
};
