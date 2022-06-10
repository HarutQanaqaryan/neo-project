import axios from "axios";
import { TypedDispatch, TypedThunk } from "..";
import { BASE_URL } from "../../helpers/contstants";
import { getClaimTypes } from "../../helpers/getClaimTypes";
import { requestHeader } from "../../helpers/requestHeader";
import { NEW_CLAIM_SUCCES, NEW_CLAIM_ERROR, NewClaimData } from "../types";

export const newClaim = (
  data: NewClaimData,
  selectedValue: string
): TypedThunk => {
  return async (dispatch: TypedDispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/claim`,
        {
          title: data.title,
          description: data.description,
          type: getClaimTypes(selectedValue),
          status: "new",
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
