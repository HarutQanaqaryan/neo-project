import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkClaimStatusColor } from "../../helpers/checkClaimStatusColor";
import { checkClaimTypeColor } from "../../helpers/checkClaimTypeColor";
import { setIncomingClaimValues } from "../../helpers/setIncomingClaimValues";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { SET_DATA } from "../../store/types/actionTypes";
import "../../styles/table-body.scss";

interface TableBodyItemType {
  claims: Array<any>;
}
export const TableBody = (prop: TableBodyItemType) => {
  const { isAdmin } = useTypedSelector((state) => state.user);
  const dispatch = useTypedDispatch();

  return (
    <tbody className="table-body">
      {prop.claims.map(({ _id, title, createdAt, type, status }) => (
        <tr key={_id} id={_id}>
          <td className="claim-cell title">{title}</td>
          <td className="claim-cell">{createdAt.substring(0, 10)}</td>
          <td className="claim-cell type">
            <span
              className="claim-type"
              style={checkClaimTypeColor(type?.name)}
            ></span>
            <span>{type ? type.name : ""}</span>
          </td>
          <td className="claim-cell">
            <span
              style={{
                background: checkClaimStatusColor(status?.name),
              }}
              className="claim-status"
            >
              {status ? status.name : ""}
            </span>
          </td>
          {isAdmin && (
            <td
              className="claim-actions"
              onClick={(e) =>
                setIncomingClaimValues({
                  e: e,
                  claims: prop.claims,
                  dispatch: dispatch,
                  action: SET_DATA,
                })
              }
            >
              <NavLink
                to={`incoming-claim/${_id}`}
                style={{textDecoration: "none",  color: "#148bff"}}
              >
                Browse
              </NavLink>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};
