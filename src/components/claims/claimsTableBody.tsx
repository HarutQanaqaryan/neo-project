import { checkClaimStatusColor } from "../../helpers/checkClaimStatusColor";
import { checkClaimTypeColor } from "../../helpers/checkClaimTypeColor";
import "../../styles/table-body.scss";
interface TableBodyItemType {
  claims: Array<any>;
}
export const TableBody = (prop: TableBodyItemType) => {
  return (
    <tbody className="table-body">
      {prop.claims.map(({ id, title, created, type, status, actions }) => (
        <tr key={id}>
          <td className="claim-cell">{title}</td>
          <td className="claim-cell">{created}</td>
          <td className="claim-cell">
            <span
              className="claim-type"
              style={checkClaimTypeColor(type)}
            ></span>
            {type}
          </td>
          <td className="claim-cell">
            <span
              style={{ background: checkClaimStatusColor(status) }}
              className="claim-status"
            >
              {status}
            </span>
          </td>
          <td className="claim-actions">{actions}</td>
        </tr>
      ))}
    </tbody>
  );
};
