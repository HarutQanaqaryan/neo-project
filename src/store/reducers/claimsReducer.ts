import {
  GET_CLAIMS_SUCCESS,
  GET_CLAIMS_ERROR,
  GET_CLAIMS_LOADING,
} from "../types/actionTypes";
import { GetClaimsAction, GetClaimsData } from "../types/getClaims";

const initialState: GetClaimsData = {
  loading: false,
  data: [],
  error: false,
};

export const claimsReducer = (
  state = initialState,
  action: GetClaimsAction
) => {
  switch (action.type) {
    case GET_CLAIMS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case GET_CLAIMS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case GET_CLAIMS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
