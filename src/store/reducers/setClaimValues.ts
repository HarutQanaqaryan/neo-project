import {
  SET_DATA,
  UPDATE_STATUS,
} from "../types/actionTypes";
import { ClaimsValueActions, SetClaimsValuesState } from "../types/newClaim";

const initialState: SetClaimsValuesState = {
  title: "",
  description: "",
  type: "",
  id: "",
  status: "",
};

export const setClaimValuesReducer = (
  state = initialState,
  action: ClaimsValueActions
) => {
  switch (action.type) {
    case SET_DATA:
      return {
        title: action.title,
        description: action.description,
        type: action.claimType,
        id: action.id,
        status: action.status,
      };
      case UPDATE_STATUS: return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
