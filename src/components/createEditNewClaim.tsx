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
import {
  NEW_CLAIM_SUCCES,
  UPDATE_DESC,
  UPDATE_TITLE,
  UPDATE_TYPE,
} from "../store/types";
import { checkSelectError } from "../helpers/checkSelectError";
import { convertClaimTypes, getClaimTypes } from "../helpers/getClaimTypes";
import { editClaim } from "../store/action-creators/edit-claim";

export const CreateEditClaim = () => {
  const { title, description, type, id } = useTypedSelector(
    (state) => state.setClaimValues
  );
  const [selectedValue, setSelectedValue] = useState(type ? convertClaimTypes(type) : "");
  const [isSelectError, setIsSelectError] = useState(false);
  const { success, error } = useTypedSelector((state) => state.newClaim);

  const isIncomingPage = useLocation().pathname === "/home/incoming-claim";

  const USER = localStorage.getItem("User");
  const ADMIN = typeof USER === "string" && JSON.parse(USER).role;
  const isAdmin = ADMIN === "admin";

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
        : dispatch(editClaim(data, selectedValue, id));
      setIsSelectError(false);
      // methods.reset();
    } else {
      setIsSelectError(true);
    }
  };

  const checkSucces = useCallback(() => {
    success && navigate("../home");
    dispatch({ type: NEW_CLAIM_SUCCES, payload: false });
  }, [dispatch, navigate, success]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: UPDATE_TITLE,
      title: e.target.value,
    });
  };

  const handleDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: UPDATE_DESC,
      description: e.target.value,
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
            onChange={handleTitle}
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
            onChange={handleDesc}
          />
          {error && <span className="success-error">Bad request !</span>}
          <Button
            text="Close"
            className="create-new-claim cancel"
            onClick={() => navigate("../home")}
          />
          {isAdmin && !isIncomingPage && (
            <Button text="Create" className="create-new-claim create" />
          )}

          {!isAdmin && (
            <Button
              text={`${isIncomingPage ? "Save" : "Create"}`}
              className="create-new-claim create"
            />
          )}

          {isAdmin && isIncomingPage && (
            <>
              <Button text="Done" className="create-new-claim create" />
              <Button text="Decline" className="create-new-claim decline" />
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
};
