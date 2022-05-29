import "../styles/table-head.scss";
import arrowsIcon from "../assets/icons/icon-arows.svg";

export const tableHeaders = ["Title", "Created", "Type", "Status", "Actions"];

export const TableHeader = () => {
  return (
    <thead className="table-head">
      <tr className="table-head-row">
        {tableHeaders.map((el) => (
          <th key={el}>
            {el}
            <img src={arrowsIcon} alt="Arrows icon" />
          </th>
        ))}
      </tr>
    </thead>
  );
};
