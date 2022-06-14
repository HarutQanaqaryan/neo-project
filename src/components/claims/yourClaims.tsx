import { ClaimsTable } from "./claimsTable";
import "../../styles/claims.scss";
import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { getClaims } from "../../store/action-creators/claims";

export const YourClaims = () => {
  const { data, loading, error } = useTypedSelector((state) => state.claims);
  const [reserveData, setReserveData] = useState(data);
  const { searchValue } = useTypedSelector((state) => state.filterValues);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    searchValue === "" && setReserveData(data);
  }, [data, searchValue]);

  useEffect(() => {
    dispatch(getClaims());
  }, [dispatch]);

  useEffect(() => {
    if (searchValue !== "") {
      setReserveData(
        (state) =>
          (state = data.filter(({ title }) =>
            title.toLowerCase().includes(searchValue.toLowerCase())
          ))
      );
    }
  }, [data, dispatch, searchValue]);

  return (
    <div className="your-claims">
      <ClaimsTable claims={reserveData} loading={loading} error={error} />
    </div>
  );
};
