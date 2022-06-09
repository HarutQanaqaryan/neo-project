import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL, USER } from "../../helpers/contstants";
import { requestHeader } from "../../helpers/requestHeader";
import { GET_CLAIMS_ERROR, GET_CLAIMS_LOADING, GET_CLAIMS_SUCCESS } from "../types";

export const getClaims = (): TypedThunk => {
  let userRole = "";
  let userId = "";

  if (typeof USER === "string") {
    userRole = JSON.parse(USER).role;
    userId = JSON.parse(USER).id;
  }

  const claimsPath = userRole === "admin" ? "claim" : `claim/${userId}`;

  return async (dispatch: TypedDispatch) => {
    try {
        dispatch({type: GET_CLAIMS_LOADING, payload: true})

      const response = await axios.get(
        `${BASE_URL}/${claimsPath}`,
        requestHeader()
      );

      dispatch({type: GET_CLAIMS_SUCCESS, payload: response.data.claims})

      dispatch({type: GET_CLAIMS_LOADING, payload: false})
      
    } catch (e) {
        dispatch({type: GET_CLAIMS_ERROR, payload: true})
    }
  };
};

