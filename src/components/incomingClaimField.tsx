import { checkClaimTypeColor } from "../helpers/checkClaimTypeColor";

interface IncomingClaimFieldTypes {
  text: string;
  icon?: string;
  label?: string;
}

export const IncomingClaimField = (prop: IncomingClaimFieldTypes) => {
  return (
    <div className="incoming-claim-fields">
      <label className="incoming-claim-field-label">{prop.label}</label>
      <div className="incoming-claim-field">
        <div className="select-input">
          {prop.label === "TYPE" && (
            <span
              className="select-option_cell"
              style={checkClaimTypeColor(prop.text)}
            ></span>
          )}
          {prop.text}
        </div>
        {prop.icon && (
          <img src={prop.icon} alt="icon" className="select-icon" />
        )}
      </div>
    </div>
  );
};
