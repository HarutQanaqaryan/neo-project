import {
  ClaimsValueActions,
  SetClaimsValuesState,
  SET_DATA,
  UPDATE_DESC,
  UPDATE_STATUS,
  UPDATE_TITLE,
  UPDATE_TYPE,
} from "../types";

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
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title,
      };
      case UPDATE_DESC:
      return {
        ...state,
        description: action.description,
      };
      case UPDATE_TYPE:
      return {
        ...state,
        claimType: action.claimType,
      };
      case UPDATE_STATUS: return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
