import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL } from "../../helpers/contstants";
import { getClaimTypes } from "../../helpers/getClaimTypes";
import { requestHeader } from "../../helpers/requestHeader";
import { NEW_CLAIM_SUCCES, NEW_CLAIM_ERROR, NewClaimData } from "../types";

export const editClaim = (
  data: NewClaimData,
  selectedValue: string,
  id: string
): TypedThunk => {
  return async (dispatch: TypedDispatch) => {
    try {
      await axios.put(
        `${BASE_URL}/claim/${id}`,
        {
          title: data.title,
          description: data.description,
          type: getClaimTypes(selectedValue),
          status: id,
        },
        requestHeader()
      );
      dispatch({ type: NEW_CLAIM_SUCCES, payload: true });
    } catch (e) {
      dispatch({ type: NEW_CLAIM_ERROR, payload: true });
      console.log(e);
    }
  };
};
