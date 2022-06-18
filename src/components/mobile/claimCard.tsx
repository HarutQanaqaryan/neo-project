import { useNavigate } from "react-router-dom";
import { checkClaimStatusColor } from "../../helpers/checkClaimStatusColor";
import { checkClaimTypeColor } from "../../helpers/checkClaimTypeColor";
import { setIncomingClaimValues } from "../../helpers/setIncomingClaimValues";
import { useTypedDispatch, useTypedSelector } from "../../store";
import { SET_DATA } from "../../store/types/actionTypes";
import "../../styles/claim-card-mobile.scss";
import { Button } from "../button";

interface ClaimCardTypes {
  title: string;
  created: string;
  type: string;
  status: string;
  id: string;
}

export const ClaimCard = (prop: ClaimCardTypes) => {
  const { isAdmin } = useTypedSelector((state) => state.user);
  const { data } = useTypedSelector((state) => state.claims);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  return (
    <div className="claim-card-wrapper">
      <h5 className="claim-card-title">{prop.title}</h5>
      <div className="claim-card" id={prop.id}>
        <div className="claim-card-desc">
          <span className="claim-card-desc-title">Created</span>
          <span className="claim-card-option">{prop.created}</span>
        </div>
        <div className="claim-card-desc">
          <span className="claim-card-desc-title">Type</span>
          <div className="type">
            <span
              className="select-option_cell"
              style={checkClaimTypeColor(prop.type)}
            ></span>{" "}
            <span className="claim-card-option_type">{prop.type}</span>
          </div>
        </div>
        <div className="claim-card-desc">
          <span className="claim-card-desc-title">Status</span>
          <span
            style={{ background: checkClaimStatusColor(prop.status) }}
            className="claim-status"
          >
            {prop.status}
          </span>
        </div>
        {isAdmin && (
          <Button
            text="Browse"
            className="create-new-claim cancel"
            onClick={(e) =>
              setIncomingClaimValues(e, data, dispatch, SET_DATA, navigate)
            }
          />
        )}
      </div>
    </div>
  );
};
