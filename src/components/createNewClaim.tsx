import { TextField } from "./textField";
import "../styles/claims.scss";
import { Select } from "./select";
import selectIcon from "../assets/icons/arrow-bottom.svg";
import { claimTypes } from "../helpers/claimTypes";
import { Button } from "./button";
import { ClaimsTitle } from "./claims/claimsTitle";

export const CreateNewClaim = () => {
  return (
    <div className="claims-block">
      <ClaimsTitle title="Creating new claim" />
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
