import { ClaimsTable } from "./claimsTable";
import "../../styles/claims.scss";
import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { getClaims } from "../../store/action-creators/claims";

export const YourClaims = () => {
  const { data, loading, error } = useTypedSelector((state) => state.claims);
  const [reserveData, setReserveData] = useState(data);
  const { value } = useTypedSelector((state) => state.searchValue);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    value === "" && setReserveData(data);
  }, [data, value]);

  useEffect(() => {
    dispatch(getClaims());
  }, [dispatch]);

  useEffect(() => {
    if (value !== "") {
      setReserveData(
        (state) =>
          (state = data.filter(({ title }) =>
            title.toLowerCase().includes(value.toLowerCase())
          ))
      );
    }
  }, [data, dispatch, value]);

  return (
    <div className="your-claims">
      <ClaimsTable claims={reserveData} loading={loading} error={error} />
    </div>
  );
};
