import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL } from "../../helpers/contstants";
import { requestHeader } from "../../helpers/requestHeader";
import {
  GET_CLAIMS_ERROR,
  GET_CLAIMS_LOADING,
  GET_CLAIMS_SUCCESS,
} from "../types/actionTypes";

export const sortSearchClaims = (column: string, searchText: string): TypedThunk => {
  return async (dispatch: TypedDispatch) => {
    try {
      dispatch({ type: GET_CLAIMS_LOADING, payload: true });
      const response = await axios.get(
        `${BASE_URL}/claim?offset=0&limit=all&search=${searchText}&column=${column}&sort=desc`,
        requestHeader()
      );
      dispatch({
        type: GET_CLAIMS_SUCCESS,
        payload: response.data !== null ? response.data.claims : [],
      });
      dispatch({ type: GET_CLAIMS_LOADING, payload: false });
    } catch (e) {
      dispatch({ type: GET_CLAIMS_ERROR, payload: true });
      console.log(e);
    }
  };
};
