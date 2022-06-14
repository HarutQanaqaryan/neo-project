import "../../styles/table-head.scss";
import arrowsIcon from "../../assets/icons/icon-arows.svg";
import { tableHeaders } from "../../helpers/tableHeader";
import { useTypedDispatch } from "../../store";
import { SORT_VALUE } from "../../store/reducers/filterValues";

export const TableHeader = () => {
  const dispatch = useTypedDispatch();
  const lastElem = tableHeaders[tableHeaders.length - 1];

  const handleOption = ({ target }: any) => {
    target.innerText !== lastElem && dispatch({ type: SORT_VALUE, sortValue: target.innerText });
  };

  return (
    <thead className="table-head">
      <tr className="table-head-row" onClick={handleOption}>
        {tableHeaders.map((el) => (
          <th key={el} >
            {el}
            {el !== lastElem && (
              <img src={arrowsIcon} alt="Arrows icon" onClick={handleOption} />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
