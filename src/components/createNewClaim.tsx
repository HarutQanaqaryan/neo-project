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
          name="Title"
          placeholder="Type claim title"
          label="TITLE"
          uniqueStyle="create-new-claim-input"
          value=""
          onChange={() => console.log("a")}
        />
        <Select
          placeholder="Select type"
          icon={selectIcon}
          label="TYPE"
          uniqueStyle="create-new-claim-input"
          options={claimTypes}
        />
        <TextField
          name="Desc"
          placeholder="Type claim description"
          label="DESCRIPTION"
          uniqueStyle="create-new-claim-input"
          value=""
          onChange={() => console.log("a")}
        />
        <Button text="Close" className="create-new-claim cancel" onClick={() => console.log("a")}/>
        <Button text="Create" className="create-new-claim create" onClick={() => console.log("a")} />
      </div>
    </div>
  );
};
