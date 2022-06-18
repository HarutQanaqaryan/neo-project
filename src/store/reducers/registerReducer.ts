import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
  } from "../types/actionTypes";
import { AuthAction, RegisterState } from "../types/loginRegister";
  
  const initialState: RegisterState = {
    success: false,
    error: false
  };
  
  export const registerReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          success: action.payload,
          error: false
        };
      case REGISTER_ERROR:
        return {
          success: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  