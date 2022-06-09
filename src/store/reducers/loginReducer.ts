import {
  AuthAction,
  SIGN_OUT,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  AuthState,
} from "../types";

const initialState: AuthState = {
  error: "",
  success: false,
};

export const loginReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SIGN_OUT:
      return {
        error: "",
        success: false,
      };
    case LOGIN_ERROR:
      return {
        error: action.payload,
        success: false,
      };
    case LOGIN_SUCCESS:
      return {
        error: "",
        success: action.payload,
      };
    default:
      return state;
  }
};
