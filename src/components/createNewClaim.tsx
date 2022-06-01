import { TextField } from "./textField";
import "../styles/claims.scss";
import { Select } from "./select";
import selectIcon from "../assets/icons/arrow-bottom.svg";
import { claimTypes } from "../helpers/claimTypes";
import { Button } from "./button";

export const CreateNewClaim = () => {
  return (
    <div className="create-new-claim-block">
      <h4 className="create-new-claim-header">Creating new claim</h4>
      <div className="create-new-claim-inputs">
        <TextField
          placeholder="Type claim title"
          label="TITLE"
          uniqueStyle="create-new-claim-input"
        />
        <Select
          placeholder="Select type"
          icon={selectIcon}
          label="TYPE"
          uniqueStyle="create-new-claim-input"
          options={claimTypes}
        />
        <TextField
          placeholder="Type claim description"
          label="DESCRIPTION"
          uniqueStyle="create-new-claim-input"
        />
        <Button text="Close" className="create-new-claim cancel"/>
        <Button text="Create" className="create-new-claim create"/>
      </div>
    </div>
  );
};
