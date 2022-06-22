import "../../styles/table-head.scss";
import arrowsIcon from "../../assets/icons/icon-arows.svg";
import { useTypedDispatch } from "../../store";
import { SORT_VALUE } from "../../store/reducers/filterValues";
import React from "react";
import { TABLE_HEADERS } from "../../helpers/contstants";

export const TableHeader = React.memo(() => {
  const dispatch = useTypedDispatch();
  const lastElem = TABLE_HEADERS[TABLE_HEADERS.length - 1];

  const handleOption = ({ target }: any) => {
    target.innerText !== lastElem &&
      dispatch({ type: SORT_VALUE, sortValue: target.innerText });
  };

  return (
    <thead className="table-head">
      <tr className="table-head-row" onClick={handleOption}>
        {TABLE_HEADERS.map((el) => (
          <th key={el}>
            {el}
            {el !== lastElem && (
              <img src={arrowsIcon} alt="Arrows icon" />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
});
