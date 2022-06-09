import {
  AuthAction,
  SIGN_OUT,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  AuthState,
  SET_USER,
} from "../types";

const initialState: AuthState = {
  user: null,
  error: "",
  success: false,
};

export const loginReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case SIGN_OUT:
      return {
        user: null,
        error: "",
        success: false,
      };
    case LOGIN_ERROR:
      return {
        user: null,
        error: action.payload,
        success: false,
      };
    case LOGIN_SUCCESS:
      return {
        user: null,
        error: "",
        success: action.payload,
      };
      case SET_USER:
        return {
          user: [],
          error: "",
          success: true
        }
    default:
      return state;
  }
};
