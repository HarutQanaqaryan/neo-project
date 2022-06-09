import { checkClaimStatusColor } from "../../helpers/checkClaimStatusColor";
import { checkClaimTypeColor } from "../../helpers/checkClaimTypeColor";
import "../../styles/claim-card-mobile.scss";
import { Button } from "../button";

interface ClaimCardTypes {
  title: string;
  created: string;
  type: string;
  status: string;
}
export const ClaimCard = (prop: ClaimCardTypes) => {
  return (
    <div className="claim-card-wrapper">
      <h5 className="claim-card-title">{prop.title}</h5>
      <div className="claim-card">
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
        <Button text="Browse" className="create-new-claim cancel" onClick={() => console.log("a")} />
      </div>
    </div>
  );
};
