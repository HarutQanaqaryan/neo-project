import { TextField } from "./textField";
import "../styles/claims.scss";
import { Select } from "./select";
import selectIcon from "../assets/icons/arrow-bottom.svg";
import { claimTypes } from "../helpers/claimTypes";
import { Button } from "./button";
import { ClaimsTitle } from "./claims/claimsTitle";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../store";
import { newClaim } from "../store/action-creators/new-claim";
import { useCallback, useEffect, useState } from "react";
import { newClaimTextPattern } from "../helpers/contstants";
import { NEW_CLAIM_SUCCESS, UPDATE_STATUS, UPDATE_TYPE } from "../store/types/actionTypes";
import { checkSelectError } from "../helpers/checkSelectError";
import { convertClaimTypes, getClaimTypes } from "../helpers/getClaimTypes";
import { editClaim } from "../store/action-creators/edit-claim";

export const CreateEditClaim = () => {
  const { title, description, type, status, id } = useTypedSelector(
    (state) => state.setClaimValues
  );
  const { isAdmin } = useTypedSelector(state => state.user)
  const { success, error } = useTypedSelector((state) => state.newClaim);
  const [selectedValue, setSelectedValue] = useState(
    type ? convertClaimTypes(type) : ""
  );
  const [isSelectError, setIsSelectError] = useState(false);
  const isIncomingPage = useLocation().pathname === "/home/incoming-claim";
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const getSelectValue = (val: string) => {
    setSelectedValue(val);
    dispatch({ type: UPDATE_TYPE, claimType: getClaimTypes(val) });
  };

  const onSubmit = (data: any) => {
    if (checkSelectError(selectedValue)) {
      !isIncomingPage
        ? dispatch(newClaim(data, selectedValue))
        : dispatch(editClaim(data, selectedValue, id, status));
      setIsSelectError(false);
      methods.reset();
    } else {
      !isIncomingPage && setIsSelectError(true);
    }
  };

  const checkSucces = useCallback(() => {
    success && navigate("../home");
    dispatch({ type: NEW_CLAIM_SUCCESS, payload: false });
  }, [dispatch, navigate, success]);

  const handleStatus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch({
      type: UPDATE_STATUS,
      status: (e.target as HTMLElement).innerText.toLowerCase().substring(0, 4),
    });
  };

  useEffect(() => checkSucces, [checkSucces]);

  return (
    <FormProvider {...methods}>
      <form className="claims-block" onSubmit={methods.handleSubmit(onSubmit)}>
        <ClaimsTitle
          title={`${isIncomingPage ? "Incoming Claim" : "Creating Claim"}`}
        />
        <div className="create-new-claim-inputs">
          <TextField
            name={"title"}
            placeholder="Type claim title"
            label="TITLE"
            uniqueStyle="create-new-claim-input"
            defaultValue={isIncomingPage ? title : ""}
            pattern={{
              value: newClaimTextPattern,
              message: "Only latin letters",
            }}
            error={methods.formState.errors.title}
            disabled={isAdmin}
            required={"Require field"}
          />
          <Select
            placeholder={
              isIncomingPage ? convertClaimTypes(type) : "Select Type"
            }
            icon={selectIcon}
            label="TYPE"
            uniqueStyle="create-new-claim-input"
            options={claimTypes}
            setSelectValue={getSelectValue}
            error={isSelectError}
            disabled={isAdmin}
          />
          <TextField
            name={"description"}
            placeholder="Type claim description"
            label="DESCRIPTION"
            uniqueStyle="create-new-claim-input"
            defaultValue={isIncomingPage ? description : ""}
            pattern={{
              value: newClaimTextPattern,
              message: "Only latin letters",
            }}
            error={methods.formState.errors.description}
            disabled={isAdmin}
            required={"Require field"}
          />
          {error && <span className="success-error">Bad request !</span>}
          <Button
            text="Close"
            className="create-new-claim cancel"
            onClick={() => navigate("../home")}
          />
          {!isIncomingPage && (
            <Button text="Create" className="create-new-claim create" />
          )}

          {isIncomingPage && (
            <>
              <Button
                text="Done"
                className="create-new-claim create"
                onClick={handleStatus}
              />
              <Button
                text="Decline"
                className="create-new-claim decline"
                onClick={handleStatus}
              />
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
