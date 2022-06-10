import { TextField } from "./textField";
import "../styles/claims.scss";
import { Select } from "./select";
import selectIcon from "../assets/icons/arrow-bottom.svg";
import { claimTypes } from "../helpers/claimTypes";
import { Button } from "./button";
import { ClaimsTitle } from "./claims/claimsTitle";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../store";
import { newClaim } from "../store/action-creators/new-claim";
import { useCallback, useEffect, useState } from "react";
import { newClaimTextPattern } from "../helpers/contstants";
import { NEW_CLAIM_SUCCES } from "../store/types";
import { checkSelectError } from "../helpers/checkSelectError";

export const CreateNewClaim = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isSelectError, setIsSelectError] = useState(false);
  const methods = useForm();
  const navigate = useNavigate();

  const { success, error } = useTypedSelector((state) => state.newClaim);
  const dispatch = useTypedDispatch();

  const getSelectValue = (val: string) => {
    setSelectedValue(val);
  };
  const onSubmit = (data: any) => {
    if (checkSelectError(selectedValue)) {
      dispatch(newClaim(data, selectedValue));
      setIsSelectError(false);
      methods.reset();
    } else {
      setIsSelectError(true);
    }
  };

  const checkSucces = useCallback(() => {
    success && navigate("../home");
    dispatch({ type: NEW_CLAIM_SUCCES, payload: false });
  }, [dispatch, navigate, success]);

  useEffect(() => checkSucces, [checkSucces]);

  return (
    <FormProvider {...methods}>
      <form className="claims-block" onSubmit={methods.handleSubmit(onSubmit)}>
        <ClaimsTitle title="Creating new claim" />
        <div className="create-new-claim-inputs">
          <TextField
            name={"title"}
            placeholder="Type claim title"
            label="TITLE"
            uniqueStyle="create-new-claim-input"
            pattern={{
              value: newClaimTextPattern,
              message: "Only latin letters",
            }}
            error={methods.formState.errors.title}
          />
          <Select
            placeholder="Select Type"
            icon={selectIcon}
            label="TYPE"
            uniqueStyle="create-new-claim-input"
            options={claimTypes}
            setSelectValue={getSelectValue}
            error={isSelectError}
          />
          <TextField
            name={"description"}
            placeholder="Type claim description"
            label="DESCRIPTION"
            uniqueStyle="create-new-claim-input"
            pattern={{
              value: newClaimTextPattern,
              message: "Only latin letters",
            }}
            error={methods.formState.errors.description}
          />
          {error && <span>Error</span>}
          <Button
            text="Close"
            className="create-new-claim cancel"
            onClick={() => navigate("../home")}
          />
          <Button text="Create" className="create-new-claim create" />
        </div>
      </form>
    </FormProvider>
  );
};
