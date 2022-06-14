import "../../styles/table-head.scss";
import arrowsIcon from "../../assets/icons/icon-arows.svg";
import { tableHeaders } from "../../helpers/tableHeader";

export const TableHeader = () => {
  const lastElem = tableHeaders[tableHeaders.length - 1]

  return (
    <thead className="table-head">
      <tr className="table-head-row">
        {tableHeaders.map((el) => (
          <th key={el}>
            {el}
            {el !== lastElem && <img src={arrowsIcon} alt="Arrows icon" />}
          </th>
        ))}
      </tr>
    </thead>
  );
};
