import { checkClaimStatusColor } from "../../helpers/checkClaimStatusColor";
import { checkClaimTypeColor } from "../../helpers/checkClaimTypeColor";
import "../../styles/table-body.scss";
interface TableBodyItemType {
  claims: Array<any>;
}
export const TableBody = (prop: TableBodyItemType) => {
  return (
    <tbody className="table-body">
      {prop.claims.map(({ _id, title, createdAt, type, status }) => (
        <tr key={_id}>
          <td className="claim-cell">{title}</td>
          <td className="claim-cell">{createdAt.substring(0, 10)}</td>
          <td className="claim-cell">
            <span
              className="claim-type"
              style={checkClaimTypeColor(type ? type.name : "")}
            ></span>
            {type ? type.name : ""}
          </td>
          <td className="claim-cell">
            <span
              style={{ background: checkClaimStatusColor(status ? status.name : "") }}
              className="claim-status"
            >
              {status ? status.name : ""}
            </span>
          </td>
          <td className="claim-actions">BUUUUUGGGG</td>
        </tr>
      ))}
    </tbody>
  );
};
